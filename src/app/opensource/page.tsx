import { Suspense } from "react";
import { SOLANA_COMPANIES } from "@/lib/solana-companies";
import { IssuesClient } from "./issues-client";

// page metadata
export const metadata = {
  title: "Open Source | Solana Ecosystem Issues",
  description:
    "Browse open issues from top Solana ecosystem projects. Find good first issues and start contributing to Helius, Jupiter, Kamino, and more.",
};

export default function SolanaIssuesPage() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* github-style header */}
      <header className="border-b border-[#30363d] bg-[#161b22]">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <svg
                height="32"
                viewBox="0 0 16 16"
                width="32"
                className="fill-white"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <h1 className="text-xl font-semibold text-white">
                Solana Ecosystem Issues
              </h1>
            </div>
            <span className="rounded-full bg-[#238636] px-3 py-1 text-sm font-medium text-white">
              {SOLANA_COMPANIES.length} Organizations
            </span>
          </div>
        </div>
      </header>

      {/* main content */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Suspense fallback={<LoadingSkeleton />}>
          <IssuesClient />
        </Suspense>
      </main>
    </div>
  );
}

// loading skeleton while fetching
function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-12 animate-pulse rounded-lg bg-[#21262d]" />
      <div className="rounded-lg border border-[#30363d]">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex items-start gap-3 border-b border-[#30363d] p-4 last:border-b-0"
          >
            <div className="h-4 w-4 animate-pulse rounded bg-[#21262d]" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-3/4 animate-pulse rounded bg-[#21262d]" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-[#21262d]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
