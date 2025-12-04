"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import { SOLANA_COMPANIES } from "@/lib/solana-companies";
import {
  fetchAndCacheOrgIssues,
  formatRelativeTime,
  getAllCachedIssues,
  type CachedIssue,
  type IssueType,
} from "@/lib/github";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

// filter type options
type TypeFilter = IssueType | "all";
type SortOption = "newest" | "oldest";

const PAGE_SIZE = 20;

// helper to get org logo from username
function getOrgLogo(orgName: string | undefined): string | null {
  if (!orgName) return null;
  const company = SOLANA_COMPANIES.find(
    (c) => c.username.toLowerCase() === orgName.toLowerCase()
  );
  return company?.logo || null;
}

// helper to get org display name
function getOrgName(username: string): string {
  const company = SOLANA_COMPANIES.find(
    (c) => c.username.toLowerCase() === username.toLowerCase()
  );
  return company?.name || username;
}

// dropdown component
function Dropdown({
  label,
  options,
  value,
  onChange,
  renderOption,
}: {
  label: string;
  options: { value: string; label: string; logo?: string }[];
  value: string;
  onChange: (value: string) => void;
  renderOption?: (option: { value: string; label: string; logo?: string }) => React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((o) => o.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-[#30363d] bg-[#21262d] px-4 py-2 text-sm text-white hover:border-[#8b949e]"
      >
        <span>{selectedOption?.label || label}</span>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 max-h-80 w-56 overflow-y-auto rounded-lg border border-[#30363d] bg-[#161b22] shadow-lg">
          {/* search input for org dropdown */}
          {options.length > 10 && (
            <div className="border-b border-[#30363d] p-2">
              <div className="flex items-center gap-2 rounded border border-[#30363d] bg-[#0d1117] px-3 py-1.5">
                <svg className="h-4 w-4 text-[#8b949e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full bg-transparent text-sm text-white placeholder-[#8b949e] outline-none"
                />
              </div>
            </div>
          )}
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${
                  value === option.value
                    ? "bg-[#21262d] text-white"
                    : "text-[#c9d1d9] hover:bg-[#21262d]"
                }`}
              >
                {value === option.value && (
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {value !== option.value && <span className="w-4" />}
                {renderOption ? renderOption(option) : option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function IssuesClient() {
  const [issues, setIssues] = useState<CachedIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState<string>("all");
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [typeFilter] = useState<TypeFilter>("all");
  const [sortOrder, setSortOrder] = useState<SortOption>("newest");
  const [fetchingOrg, setFetchingOrg] = useState<string | null>(null);
  const [fetchProgress, setFetchProgress] = useState<string>("");
  const [fetchResult, setFetchResult] = useState<{ org: string; count: number; success: boolean } | null>(null);

  // fetch issues from firebase cache only
  const fetchIssues = useCallback(async (loadMore = false) => {
    if (loadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
      setIssues([]);
      setLastDoc(null);
    }

    try {
      const result = await getAllCachedIssues(
        PAGE_SIZE,
        loadMore ? lastDoc : null,
        {
          orgNames: selectedOrg !== "all" ? [selectedOrg] : undefined,
          type: typeFilter,
        }
      );

      setIssues((prev) => (loadMore ? [...prev, ...result.issues] : result.issues));
      setLastDoc(result.lastDoc);
      setHasMore(result.hasMore);
    } catch (error) {
      console.error("Failed to fetch issues:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [selectedOrg, lastDoc, typeFilter]);

  // initial fetch
  useEffect(() => {
    fetchIssues(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOrg, typeFilter]);

  // load more handler
  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      fetchIssues(true);
    }
  };

  // fetch and cache issues for a specific org
  const handleFetchOrg = async (username: string) => {
    if (fetchingOrg) return;

    setFetchingOrg(username);
    setFetchProgress("Starting...");
    setFetchResult(null);

    const result = await fetchAndCacheOrgIssues(username, (msg) => {
      setFetchProgress(msg);
    });

    setFetchResult({ org: username, count: result.count, success: result.success });
    setFetchingOrg(null);
    setFetchProgress("");

    // refresh the issues list after caching
    if (result.success && result.count > 0) {
      fetchIssues(false);
    }
  };

  // sort issues
  const sortedIssues = useMemo(() => {
    const sorted = [...issues];
    if (sortOrder === "oldest") {
      sorted.sort((a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime());
    }
    return sorted;
  }, [issues, sortOrder]);

  // organization options for dropdown
  const orgOptions = useMemo(() => {
    const opts: { value: string; label: string; logo?: string }[] = [
      { value: "all", label: "All Organizations" }
    ];
    SOLANA_COMPANIES.forEach((company) => {
      opts.push({ value: company.username, label: company.name, logo: company.logo });
    });
    return opts;
  }, []);

  // sort options
  const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
  ];

  return (
    <div className="space-y-8">
      {/* header */}
      <div>
        <h1 className="text-4xl font-bold text-white">Open Source Tasks</h1>
        <p className="mt-2 text-[#8b949e]">
          Contribute to open-source codebases to gain experience and make an impact.
        </p>
      </div>

      {/* fetch progress bar */}
      {fetchingOrg && (
        <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-4">
          <div className="flex items-center gap-3">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#30363d] border-t-[#58a6ff]" />
            <span className="text-sm text-[#c9d1d9]">{fetchProgress}</span>
          </div>
        </div>
      )}

      {/* fetch result notification */}
      {fetchResult && (
        <div className={`rounded-lg border p-4 ${fetchResult.success ? "border-[#238636] bg-[#238636]/10" : "border-[#da3633] bg-[#da3633]/10"}`}>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#c9d1d9]">
              {fetchResult.success
                ? `Successfully cached ${fetchResult.count} issues from ${getOrgName(fetchResult.org)}`
                : `Failed to fetch issues from ${getOrgName(fetchResult.org)}`
              }
            </span>
            <button
              onClick={() => setFetchResult(null)}
              className="text-[#8b949e] hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* filters row */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* org dropdown */}
          <Dropdown
            label="All Organizations"
            options={orgOptions}
            value={selectedOrg}
            onChange={setSelectedOrg}
          />

          {/* fetch button for selected org */}
          {selectedOrg !== "all" && (
            <button
              onClick={() => handleFetchOrg(selectedOrg)}
              disabled={fetchingOrg !== null}
              className="flex items-center gap-2 rounded-lg border border-[#30363d] bg-[#238636] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2ea043] disabled:opacity-50"
            >
              {fetchingOrg === selectedOrg ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              )}
              Fetch Issues
            </button>
          )}
        </div>

        {/* sort dropdown */}
        <Dropdown
          label="Newest"
          options={sortOptions}
          value={sortOrder}
          onChange={(v) => setSortOrder(v as SortOption)}
        />
      </div>

      {/* issues grid */}
      {loading && issues.length === 0 ? (
        <div className="py-20 text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-3 border-[#30363d] border-t-[#58a6ff]" />
          <p className="mt-5 text-base text-[#8b949e]">Loading issues...</p>
        </div>
      ) : sortedIssues.length === 0 ? (
        <div className="py-20 text-center">
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
          <p className="mt-2 text-sm text-[#8b949e]">Select an organization and click Fetch Issues to load data</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {sortedIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}

      {/* load more button */}
      {hasMore && !loading && sortedIssues.length > 0 && (
        <div className="text-center">
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

      {/* fetch all section */}
      <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-6">
        <h3 className="text-lg font-semibold text-white">Fetch Issues from Organizations</h3>
        <p className="mt-1 text-sm text-[#8b949e]">Click on an organization to fetch and cache its issues</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SOLANA_COMPANIES.map((company) => (
            <button
              key={company.username}
              onClick={() => handleFetchOrg(company.username)}
              disabled={fetchingOrg !== null}
              className={`flex items-center gap-3 rounded-lg border border-[#30363d] p-3 text-left transition-colors ${
                fetchingOrg === company.username
                  ? "border-[#58a6ff] bg-[#58a6ff]/10"
                  : "hover:border-[#8b949e] hover:bg-[#21262d]"
              } disabled:opacity-50`}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="truncate text-sm font-medium text-white">{company.name}</span>
              {fetchingOrg === company.username && (
                <span className="ml-auto h-4 w-4 animate-spin rounded-full border-2 border-[#30363d] border-t-[#58a6ff]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// issue card component
function IssueCard({ issue }: { issue: CachedIssue }) {
  const orgLogo = getOrgLogo(issue.org_name);

  return (
    <a
      href={issue.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 rounded-lg border border-[#30363d] bg-[#0d1117] p-5 transition-colors hover:border-[#8b949e]"
    >
      {/* org logo */}
      {orgLogo ? (
        <Image
          src={orgLogo}
          alt={issue.org_name || "org"}
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-full"
        />
      ) : (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#21262d]">
          <svg className="h-6 w-6 text-[#8b949e]" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
          </svg>
        </div>
      )}

      <div className="min-w-0 flex-1">
        {/* title */}
        <h3 className="text-base font-semibold leading-snug text-white">
          #{issue.number} - {issue.title}
        </h3>

        {/* labels */}
        {issue.labels.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {issue.labels.slice(0, 3).map((label) => (
              <span
                key={label.id}
                className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: `#${label.color}`,
                  color: isLightColor(label.color) ? "#000" : "#fff",
                }}
              >
                {label.name}
              </span>
            ))}
          </div>
        )}

        {/* repo info */}
        <p className="mt-3 text-sm text-[#8b949e]">
          {issue.org_name}/{issue.repo_name}
        </p>

        {/* meta row */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#8b949e]">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#238636]" />
            {issue.state}
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM8 4a.75.75 0 01.75.75v2.69l1.78 1.78a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 01-.22-.53V4.75A.75.75 0 018 4z" />
            </svg>
            {formatRelativeTime(issue.updated_at)}
          </span>
          {issue.comments > 0 && (
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z" />
              </svg>
              {issue.comments}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

// helper to check if a color is light
function isLightColor(color: string): boolean {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
}
