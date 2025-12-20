"use client";

import React from "react";
import { Card } from "../ui/card";
import { ExternalLink, GitMerge, Star } from "lucide-react";

// top 4 prs to showcase
const featuredPRs = [
  { number: 760, title: "casino skill for card games" },
  { number: 655, title: "autonomous task generation" },
  { number: 543, title: "token skills, defi & nfts" },
];

export function OpenSourceContribution() {
  return (
    <Card className="col-span-1 sm:col-span-2 bg-gh-900 border border-gh-700 p-4 sm:p-5">
      {/* description */}
      <p className="text-gh-200 text-base leading-relaxed mb-4">
        <span className="text-white font-semibold">
          Top open source contributor
        </span>{" "}
        to{" "}
        <a
          href="https://github.com/crestalnetwork/intentkit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#58a6ff] hover:underline font-medium"
        >
          IntentKit
        </a>{" "}
        <span className="text-gh-400">(</span>
        <Star className="inline w-4 h-4 text-yellow-500 -mt-0.5" />
        <span className="text-white font-medium"> 6.5K+</span>
        <span className="text-gh-400">)</span> - an{" "}
        <span className="text-[#10a37f] font-medium">AI Agent framework</span>{" "}
        on Base L2. Built{" "}
        <span className="text-white font-medium">45+ tools</span> in{" "}
        <span className="text-[#3572A5] font-medium">Python</span> using{" "}
        <span className="text-[#a371f7] font-medium">LangChain</span>.
      </p>

      {/* stats badges */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#a371f7]/10 border border-[#a371f7]/30 rounded-full">
          <GitMerge className="w-4 h-4 text-[#a371f7]" />
          <span className="text-[#a371f7] text-sm font-semibold">
            45 merged
          </span>
        </div>
        <a
          href="https://github.com/crestalnetwork/intentkit/pulls?q=is%3Apr+author%3Abluntbrain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-gh-800 hover:bg-gh-700 border border-gh-600 rounded-full transition-colors"
        >
          <span className="text-white text-sm font-medium">View All</span>
          <ExternalLink className="w-4 h-4 text-gh-400" />
        </a>
      </div>

      {/* top 4 prs always visible */}
      <div className="grid grid-cols-1 gap-2">
        {featuredPRs.map((pr) => (
          <a
            key={pr.number}
            href={`https://github.com/crestalnetwork/intentkit/pull/${pr.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 bg-gh-800/50 hover:bg-gh-800 border border-gh-700/50 hover:border-gh-600 rounded-lg transition-colors group"
          >
            <GitMerge className="w-4 h-4 text-[#a371f7] shrink-0" />
            <span className="text-gh-400 text-sm font-mono">#{pr.number}</span>
            <span className="text-gh-300 text-sm truncate group-hover:text-white transition-colors">
              {pr.title}
            </span>
          </a>
        ))}
      </div>
    </Card>
  );
}
