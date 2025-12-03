"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { SOLANA_COMPANIES } from "@/lib/solana-companies";
import {
  GitHubIssue,
  fetchOrgIssues,
  formatRelativeTime,
  getLabelTextColor,
  getAllCachedIssues,
  type CachedIssue,
  type IssueType,
} from "@/lib/github";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

// filter type options
type TypeFilter = IssueType | "all";

const PAGE_SIZE = 20;

// helper to get org logo from username
function getOrgLogo(orgName: string | undefined): string | null {
  if (!orgName) return null;
  const company = SOLANA_COMPANIES.find(
    (c) => c.username.toLowerCase() === orgName.toLowerCase()
  );
  return company?.logo || null;
}

export function IssuesClient() {
  const [issues, setIssues] = useState<(GitHubIssue | CachedIssue)[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedOrgs, setSelectedOrgs] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingOrgs, setLoadingOrgs] = useState<Set<string>>(new Set());
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [useCache, setUseCache] = useState(true);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");

  // fetch issues - either from github api or firebase cache
  const fetchIssues = useCallback(async (loadMore = false) => {
    if (loadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
      setIssues([]);
      setLastDoc(null);
    }

    try {
      // if orgs selected, fetch from github api and cache
      if (selectedOrgs.length > 0 && !useCache) {
        setLoadingOrgs(new Set(selectedOrgs));
        const allIssues: GitHubIssue[] = [];

        for (const org of selectedOrgs) {
          try {
            const orgIssues = await fetchOrgIssues(org);
            allIssues.push(...orgIssues);
            setLoadingOrgs((prev) => {
              const next = new Set(prev);
              next.delete(org);
              return next;
            });
          } catch (error) {
            console.error(`Failed to fetch issues for ${org}:`, error);
          }
        }

        // sort by updated date and limit to page size
        allIssues.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );

        setIssues(loadMore ? (prev) => [...prev, ...allIssues] : allIssues);
        setHasMore(false); // github api fetches all at once
      } else {
        // fetch from firebase cache with pagination
        const result = await getAllCachedIssues(
          PAGE_SIZE,
          loadMore ? lastDoc : null,
          {
            orgNames: selectedOrgs.length > 0 ? selectedOrgs : undefined,
            type: typeFilter,
          }
        );

        setIssues((prev) => (loadMore ? [...prev, ...result.issues] : result.issues));
        setLastDoc(result.lastDoc);
        setHasMore(result.hasMore);
      }
    } catch (error) {
      console.error("Failed to fetch issues:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [selectedOrgs, useCache, lastDoc, typeFilter]);

  // initial fetch
  useEffect(() => {
    fetchIssues(false);
  }, [selectedOrgs, useCache, typeFilter]);

  // toggle org selection
  const toggleOrg = (username: string) => {
    setSelectedOrgs((prev) =>
      prev.includes(username)
        ? prev.filter((o) => o !== username)
        : [...prev, username]
    );
    setUseCache(false); // reset to api mode when selecting orgs
  };

  // filter issues by search query
  const filteredIssues = useMemo(() => {
    if (!searchQuery) return issues;
    const query = searchQuery.toLowerCase();
    return issues.filter((issue) =>
      issue.title.toLowerCase().includes(query) ||
      issue.repo_name?.toLowerCase().includes(query) ||
      issue.org_name?.toLowerCase().includes(query)
    );
  }, [issues, searchQuery]);

  // load more handler
  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      fetchIssues(true);
    }
  };

  return (
    <div className="flex gap-6">
      {/* sidebar filters */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="sticky top-6 space-y-6">
          {/* type filter - issues vs prs */}
          <div className="rounded-lg border border-[#30363d] bg-[#161b22]">
            <div className="border-b border-[#30363d] px-4 py-3">
              <h3 className="text-sm font-semibold text-white">Type</h3>
            </div>
            <div className="flex p-2">
              <button
                onClick={() => setTypeFilter("all")}
                className={`flex-1 rounded-l-md px-3 py-2 text-sm font-medium transition-colors ${
                  typeFilter === "all"
                    ? "bg-[#238636] text-white"
                    : "bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setTypeFilter("issue")}
                className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                  typeFilter === "issue"
                    ? "bg-[#238636] text-white"
                    : "bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
                }`}
              >
                <span className="flex items-center justify-center gap-1">
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
                  </svg>
                  Issues
                </span>
              </button>
              <button
                onClick={() => setTypeFilter("pr")}
                className={`flex-1 rounded-r-md px-3 py-2 text-sm font-medium transition-colors ${
                  typeFilter === "pr"
                    ? "bg-[#238636] text-white"
                    : "bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d]"
                }`}
              >
                <span className="flex items-center justify-center gap-1">
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z" />
                  </svg>
                  PRs
                </span>
              </button>
            </div>
          </div>

          {/* data source toggle */}
          <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-3">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-[#c9d1d9]">
              <input
                type="checkbox"
                checked={useCache}
                onChange={(e) => setUseCache(e.target.checked)}
                className="h-4 w-4 rounded border-[#30363d] bg-[#0d1117]"
              />
              <span>Use cached data (faster)</span>
            </label>
          </div>

          {/* org filter */}
          <div className="rounded-lg border border-[#30363d] bg-[#161b22]">
            <div className="border-b border-[#30363d] px-4 py-3">
              <h3 className="text-sm font-semibold text-white">Organizations</h3>
            </div>
            <div className="max-h-[500px] overflow-y-auto p-2">
              {SOLANA_COMPANIES.map((company) => (
                <button
                  key={company.username}
                  onClick={() => toggleOrg(company.username)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors ${
                    selectedOrgs.includes(company.username)
                      ? "bg-[#238636] text-white"
                      : "text-[#c9d1d9] hover:bg-[#21262d]"
                  }`}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <span className="truncate text-sm font-medium">{company.name}</span>
                  {loadingOrgs.has(company.username) && (
                    <span className="ml-auto h-4 w-4 animate-spin rounded-full border-2 border-[#30363d] border-t-white" />
                  )}
                </button>
              ))}
            </div>
            {selectedOrgs.length > 0 && (
              <div className="border-t border-[#30363d] p-2">
                <button
                  onClick={() => setSelectedOrgs([])}
                  className="w-full rounded-md px-3 py-2 text-sm text-[#58a6ff] hover:bg-[#21262d]"
                >
                  Clear selection
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* main content */}
      <div className="min-w-0 flex-1">
        {/* search and stats bar */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8b949e]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search issues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-[#30363d] bg-[#0d1117] py-3 pl-12 pr-4 text-base text-white placeholder-[#8b949e] focus:border-[#58a6ff] focus:outline-none focus:ring-1 focus:ring-[#58a6ff]"
            />
          </div>
          <div className="flex items-center gap-2 text-base text-[#8b949e]">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              <path
                fillRule="evenodd"
                d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
              />
            </svg>
            <span className="font-medium">
              {filteredIssues.length} issue{filteredIssues.length !== 1 ? "s" : ""}
              {hasMore && " (more available)"}
            </span>
          </div>
        </div>

        {/* issues list */}
        <div className="rounded-lg border border-[#30363d]">
          {loading && issues.length === 0 ? (
            <div className="p-12 text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-3 border-[#30363d] border-t-[#58a6ff]" />
              <p className="mt-5 text-base text-[#8b949e]">
                {useCache ? "Loading cached issues..." : "Fetching issues from Solana ecosystem..."}
              </p>
            </div>
          ) : filteredIssues.length === 0 ? (
            <div className="p-12 text-center">
              <svg
                className="mx-auto h-16 w-16 text-[#8b949e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
              <p className="mt-5 text-lg text-[#8b949e]">No issues found</p>
              {!useCache && (
                <button
                  onClick={() => setUseCache(true)}
                  className="mt-3 text-base text-[#58a6ff] hover:underline"
                >
                  Try loading from cache
                </button>
              )}
            </div>
          ) : (
            <div className="divide-y divide-[#30363d]">
              {filteredIssues.map((issue) => (
                <IssueRow key={issue.id} issue={issue} orgLogo={getOrgLogo(issue.org_name)} />
              ))}
            </div>
          )}
        </div>

        {/* load more button */}
        {hasMore && !loading && filteredIssues.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="rounded-lg border border-[#30363d] bg-[#21262d] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#30363d] disabled:opacity-50"
            >
              {loadingMore ? (
                <span className="flex items-center gap-2">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#30363d] border-t-white" />
                  Loading...
                </span>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// single issue row component with org logo
function IssueRow({
  issue,
  orgLogo
}: {
  issue: GitHubIssue | CachedIssue;
  orgLogo: string | null;
}) {
  // check if this is a pr based on url
  const isPR = issue.html_url.includes("/pull/");

  return (
    <a
      href={issue.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 p-5 transition-colors hover:bg-[#161b22]"
    >
      {/* org logo - bigger size */}
      {orgLogo ? (
        <Image
          src={orgLogo}
          alt={issue.org_name || "org"}
          width={40}
          height={40}
          className="mt-1 shrink-0 rounded-full"
        />
      ) : (
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#21262d]">
          {isPR ? (
            <svg className="h-5 w-5 text-[#a371f7]" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z" />
            </svg>
          ) : (
            <svg className="h-5 w-5 text-[#238636]" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
            </svg>
          )}
        </div>
      )}

      <div className="min-w-0 flex-1">
        {/* title - bigger text */}
        <div className="flex flex-wrap items-start gap-2">
          <span className="text-base font-semibold leading-snug text-white hover:text-[#58a6ff]">
            {issue.title}
          </span>
        </div>

        {/* labels - bigger */}
        {issue.labels.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {issue.labels.slice(0, 5).map((label) => (
              <span
                key={label.id}
                className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium"
                style={{
                  backgroundColor: `#${label.color}`,
                  color: getLabelTextColor(label.color),
                }}
              >
                {label.name}
              </span>
            ))}
          </div>
        )}

        {/* meta info - bigger text */}
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#8b949e]">
          <span className="font-medium text-[#58a6ff]">
            {issue.org_name}/{issue.repo_name}
          </span>
          <span className="text-[#8b949e]">#{issue.number}</span>
          <span>opened {formatRelativeTime(issue.created_at)}</span>
          <span>by {issue.user.login}</span>
          {issue.comments > 0 && (
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
                />
              </svg>
              {issue.comments}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
