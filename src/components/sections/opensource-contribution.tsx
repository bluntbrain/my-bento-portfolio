"use client";

import React from "react";
import { Card } from "../ui/card";
import { ExternalLink, GitMerge, Star } from "lucide-react";

const featuredPRs = [
  { number: 760, title: "casino skill for card games" },
  { number: 655, title: "autonomous task generation" },
  { number: 543, title: "token skills, defi & nfts" },
];

export function OpenSourceContribution() {
  return (
    <Card className="p-5">
      <p className="text-gh-400 text-sm leading-relaxed mb-4">
        <span className="text-white font-medium">
          Top open source contributor
        </span>{" "}
        to{" "}
        <a
          href="https://github.com/crestalnetwork/intentkit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline font-medium"
        >
          IntentKit
        </a>{" "}
        <span className="text-gh-500">(</span>
        <Star className="inline w-3.5 h-3.5 text-gh-500 -mt-0.5" />
        <span className="text-white font-medium"> 6.5K+</span>
        <span className="text-gh-500">)</span> — an{" "}
        <span className="text-white font-medium">AI Agent framework</span>{" "}
        on Base L2. Built{" "}
        <span className="text-white font-medium">45+ tools</span> in{" "}
        <span className="text-white font-medium">Python</span> using{" "}
        <span className="text-white font-medium">LangChain</span>.
      </p>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] rounded-lg">
          <GitMerge className="w-3.5 h-3.5 text-white" />
          <span className="text-white text-sm font-medium">
            45 merged
          </span>
        </div>
        <a
          href="https://github.com/crestalnetwork/intentkit/pulls?q=is%3Apr+author%3Abluntbrain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] rounded-lg transition-colors"
        >
          <span className="text-gh-300 text-sm font-medium">View All</span>
          <ExternalLink className="w-3.5 h-3.5 text-gh-500" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-1.5">
        {featuredPRs.map((pr) => (
          <a
            key={pr.number}
            href={`https://github.com/crestalnetwork/intentkit/pull/${pr.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.04] hover:border-white/[0.08] rounded-lg transition-colors group"
          >
            <GitMerge className="w-3.5 h-3.5 text-white shrink-0" />
            <span className="text-gh-500 text-sm font-mono">#{pr.number}</span>
            <span className="text-gh-400 text-sm truncate group-hover:text-gh-200 transition-colors">
              {pr.title}
            </span>
          </a>
        ))}
      </div>
    </Card>
  );
}
