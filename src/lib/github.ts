// github api utilities for fetching repos and issues
import { cacheIssues, getCachedIssues, IssueToCache } from "./firebase";

// re-export firebase types and functions for use in components
export { getAllCachedIssues, type PaginatedResult, type CachedIssue, type IssueType, type IssueFilters } from "./firebase";
export type { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

// helper to determine if url is for PR or issue
function getIssueType(url: string): "issue" | "pr" {
  return url.includes("/pull/") ? "pr" : "issue";
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  open_issues_count: number;
  updated_at: string;
}

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  body: string | null;
  html_url: string;
  state: string;
  created_at: string;
  updated_at: string;
  comments: number;
  labels: GitHubLabel[];
  user: GitHubUser;
  repository_url: string;
  repo_name?: string;
  org_name?: string;
}

export interface GitHubLabel {
  id: number;
  name: string;
  color: string;
  description: string | null;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
}

const GITHUB_API = "https://api.github.com";

// github token for higher rate limits (optional)
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

// track rate limit status
let isRateLimited = false;

// common headers for github api
function getHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (GITHUB_TOKEN) {
    headers.Authorization = `token ${GITHUB_TOKEN}`;
  }
  return headers;
}

// fetch all public repos for an org
export async function fetchOrgRepos(org: string): Promise<{ repos: GitHubRepo[]; rateLimited: boolean }> {
  try {
    const response = await fetch(
      `${GITHUB_API}/orgs/${org}/repos?per_page=100&sort=updated`,
      {
        headers: getHeaders(),
        cache: "no-store",
      }
    );

    // check for rate limit
    if (response.status === 403) {
      const data = await response.json();
      if (data.message?.includes("rate limit")) {
        isRateLimited = true;
        return { repos: [], rateLimited: true };
      }
    }

    if (!response.ok) {
      console.error(`Failed to fetch repos for ${org}: ${response.status}`);
      return { repos: [], rateLimited: false };
    }

    isRateLimited = false;
    return { repos: await response.json(), rateLimited: false };
  } catch (error) {
    console.error(`Error fetching repos for ${org}:`, error);
    return { repos: [], rateLimited: false };
  }
}

// fetch open issues for a repo
export async function fetchRepoIssues(
  owner: string,
  repo: string
): Promise<{ issues: GitHubIssue[]; rateLimited: boolean }> {
  try {
    const url = `${GITHUB_API}/repos/${owner}/${repo}/issues?state=open&per_page=30&sort=updated`;

    const response = await fetch(url, {
      headers: getHeaders(),
      cache: "no-store",
    });

    // check for rate limit
    if (response.status === 403) {
      const data = await response.json();
      if (data.message?.includes("rate limit")) {
        isRateLimited = true;
        return { issues: [], rateLimited: true };
      }
    }

    if (!response.ok) {
      return { issues: [], rateLimited: false };
    }

    const issues: GitHubIssue[] = await response.json();

    // add repo and org info to each issue
    const enrichedIssues = issues.map((issue) => ({
      ...issue,
      repo_name: repo,
      org_name: owner,
    }));

    return { issues: enrichedIssues, rateLimited: false };
  } catch (error) {
    console.error(`Error fetching issues for ${owner}/${repo}:`, error);
    return { issues: [], rateLimited: false };
  }
}

// fetch all issues from an org with firebase caching
export async function fetchOrgIssues(org: string): Promise<GitHubIssue[]> {
  // first try github api
  const { repos, rateLimited: repoRateLimited } = await fetchOrgRepos(org);

  // if rate limited, fetch from firebase cache
  if (repoRateLimited || isRateLimited) {
    console.log(`Rate limited, fetching cached issues for ${org}`);
    const { issues: cached } = await getCachedIssues(org, 100);
    // convert cached issues to GitHubIssue format
    return cached.map((issue) => ({
      ...issue,
      labels: issue.labels,
      user: issue.user,
      repository_url: issue.repository_url || "",
    }));
  }

  // fetch issues from repos that have open issues
  const reposWithIssues = repos.filter((repo) => repo.open_issues_count > 0);

  const allIssues: GitHubIssue[] = [];
  let hitRateLimit = false;

  // fetch sequentially to reduce rate limit hits
  for (const repo of reposWithIssues) {
    if (hitRateLimit) break;

    const { issues, rateLimited } = await fetchRepoIssues(org, repo.name);

    if (rateLimited) {
      hitRateLimit = true;
      // fetch remaining from cache
      const { issues: cached } = await getCachedIssues(org, 100);
      const cachedAsGitHub = cached.map((issue) => ({
        ...issue,
        repository_url: issue.repository_url || "",
      }));
      return [...allIssues, ...cachedAsGitHub];
    }

    allIssues.push(...issues);
  }

  // cache the fetched issues to firebase
  if (allIssues.length > 0) {
    console.log(`Preparing to cache ${allIssues.length} issues for ${org}`);
    const issuesToCache: IssueToCache[] = allIssues.map((issue) => ({
      id: issue.id,
      number: issue.number,
      title: issue.title,
      body: issue.body,
      html_url: issue.html_url,
      state: issue.state,
      created_at: issue.created_at,
      updated_at: issue.updated_at,
      comments: issue.comments,
      labels: issue.labels,
      user: issue.user,
      repo_name: issue.repo_name || "",
      org_name: issue.org_name || org,
      repository_url: issue.repository_url,
      type: getIssueType(issue.html_url),
    }));

    // await caching to ensure it completes
    try {
      await cacheIssues(issuesToCache);
    } catch (err) {
      console.error("Failed to cache issues:", err);
    }
  }

  return allIssues;
}

// helper to format relative time
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 30) {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } else if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  } else if (diffMins > 0) {
    return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
  } else {
    return "just now";
  }
}

// get contrasting text color for label background
export function getLabelTextColor(bgColor: string): string {
  const hex = bgColor.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#ffffff";
}
