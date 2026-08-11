// achievements carousel: three hackathon wins plus the two things that shipped
// to real users. auto-advances, pauses on hover.
"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Trophy, ExternalLink, Github } from "lucide-react";
import { useInView } from "@/lib/utils";

interface Achievement {
  headline: string;
  project: string;
  detail: string;
  meta: string;
  tags: string[];
  image?: string;
  links: { label: string; href: string; icon: "external" | "github" }[];
}

const ACHIEVEMENTS: Achievement[] = [
  {
    headline: "$10,000",
    project: "Repo Reward",
    detail:
      "SuperHack winner. A decentralised bounty platform paying out for open source contributions on Base.",
    meta: "SuperHack, Feb 2024",
    tags: ["Base", "Solidity"],
    image: "/images/achievements/superhack.png",
    links: [
      { label: "ETH Global", href: "https://ethglobal.com/showcase/repo-rewards-su0bh", icon: "external" },
      {
        label: "Source",
        href: "https://github.com/Krane-Apps/repo-rewards-superhack-2024",
        icon: "github",
      },
    ],
  },
  {
    headline: "$4,000",
    project: "Chain Monsters",
    detail:
      "StarkHack winner. An on-chain monster battling game written in Cairo, with the full battle loop settled on StarkNet.",
    meta: "StarkHack, Mar 2024",
    tags: ["StarkNet", "Cairo"],
    image: "/images/achievements/starkhack.png",
    links: [
      { label: "ETH Global", href: "https://ethglobal.com/showcase/chain-monsters-o26dw", icon: "external" },
      { label: "Source", href: "https://github.com/Krane-Apps/chain-monsters", icon: "github" },
    ],
  },
  {
    headline: "$2,000",
    project: "ZK Credit Score",
    detail:
      "ETH Bangkok winner. Credit scoring that proves creditworthiness without revealing the underlying balances.",
    meta: "ETH Bangkok, Dec 2023",
    tags: ["ZK Proofs", "DeFi"],
    image: "/images/achievements/ethbangkok.png",
    links: [
      { label: "ETH Global", href: "https://ethglobal.com/showcase/zk-credit-score-pa7r4", icon: "external" },
    ],
  },
  {
    headline: "20K+ downloads",
    project: "NearMe",
    detail:
      "Built and published on the Solana Seeker dApp Store in two days, then went viral. 10K+ merchants accepting SOL, scraped worldwide. 4.2 stars across 1.1K+ reviews.",
    meta: "Solana Seeker, 2025",
    tags: ["React Native", "Solana"],
    image: "/images/nearme1.jpeg",
    links: [{ label: "All Seeker apps", href: "/seeker", icon: "external" }],
  },
  {
    headline: "45 merged PRs",
    project: "IntentKit",
    detail:
      "Top outside contributor to a 6.5K-star AI agent framework on Base. 45+ agent tools written in Python with LangChain.",
    meta: "Open source, 2025",
    tags: ["Python", "LangChain"],
    links: [
      {
        label: "My pull requests",
        href: "https://github.com/crestalnetwork/intentkit/pulls?q=is%3Apr+author%3Abluntbrain",
        icon: "github",
      },
    ],
  },
  {
    headline: "14 stars",
    project: "Solscan for React Native",
    detail:
      "Explore any Solana wallet from a phone: SOL balance, token holdings and recent transactions for any address.",
    meta: "Open source",
    tags: ["React Native", "Solana"],
    links: [
      { label: "Source", href: "https://github.com/bluntbrain/solscan-react-native", icon: "github" },
    ],
  },
  {
    headline: "Perps, cloned",
    project: "Phantom perps interface",
    detail:
      "The Phantom wallet perpetuals trading screen rebuilt in React Native, order ticket and position states included.",
    meta: "Open source",
    tags: ["React Native", "DeFi"],
    links: [
      { label: "Source", href: "https://github.com/bluntbrain/phantom-app-perps-clone", icon: "github" },
    ],
  },
  {
    headline: "RAG, end to end",
    project: "rag-supabase-ts",
    detail:
      "Retrieval-augmented generation on Supabase vector storage: chunking, embeddings, similarity search and a grounded answer that cites its sources.",
    meta: "Open source",
    tags: ["TypeScript", "Embeddings"],
    links: [
      { label: "Source", href: "https://github.com/bluntbrain/rag-supabase-ts", icon: "github" },
    ],
  },
  {
    headline: "A lending protocol",
    project: "solana-lending-protocol",
    detail:
      "Deposit collateral, borrow against it, get liquidated when the ratio breaks. Written in Rust, on Solana.",
    meta: "Open source",
    tags: ["Rust", "Anchor"],
    links: [
      { label: "Source", href: "https://github.com/bluntbrain/solana-lending-protocol", icon: "github" },
    ],
  },
  {
    headline: "A stablecoin",
    project: "stable-coin-foundry",
    detail:
      "Algorithmic, exogenously collateralised stablecoin backed by wETH and wBTC, with Chainlink oracles and liquidations. Built in Foundry.",
    meta: "Open source",
    tags: ["Solidity", "Foundry"],
    links: [
      { label: "Source", href: "https://github.com/bluntbrain/stable-coin-foundry", icon: "github" },
    ],
  },
  {
    headline: "Fuzz and invariants",
    project: "invariant-testing-foundry",
    detail:
      "A working guide to the testing most Solidity repos skip: stateful fuzzing and invariant tests that actually break things.",
    meta: "Open source",
    tags: ["Solidity", "Testing"],
    links: [
      { label: "Source", href: "https://github.com/bluntbrain/invariant-testing-foundry", icon: "github" },
    ],
  },
  {
    headline: "5 stars",
    project: "AI component builder",
    detail:
      "Describe a React component in a prompt and get working code back, rendered live in the browser.",
    meta: "Open source",
    tags: ["TypeScript", "AI"],
    links: [
      { label: "Source", href: "https://github.com/bluntbrain/ai-component-builder-react-js", icon: "github" },
    ],
  },
  {
    headline: "Anchor and Pinocchio",
    project: "solana-programs",
    detail:
      "Vaults, escrow, an AMM, flash loans, staking and CPI examples. The same programs written twice, once in Anchor and once in no_std Pinocchio.",
    meta: "Open source",
    tags: ["Rust", "no_std"],
    links: [
      { label: "Source", href: "https://github.com/bluntbrain/solana-projects", icon: "github" },
    ],
  },
];

export function Achievements() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>();

  const next = useCallback(() => setIndex((i) => (i + 1) % ACHIEVEMENTS.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length),
    []
  );

  // hold on hover, on keyboard focus, and for anyone who asked for less motion
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="w-full overflow-hidden py-20">
      <div
        ref={ref}
        className={`reveal ${inView ? "in-view" : ""} mx-auto max-w-[1200px] px-6`}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]">
            What actually <span className="font-serif">shipped.</span>
          </h2>

          <div className="flex flex-col items-start gap-2 md:items-end">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <Trophy key={i} className="h-5 w-5 text-black" strokeWidth={1.5} />
                ))}
              </div>
              <span className="text-sm text-[#051A24]">$16K in hackathon prizes</span>
            </div>
            <a
              href="https://github.com/bluntbrain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#051A24] underline decoration-2 underline-offset-4"
            >
              112 public repos on GitHub
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-12 max-w-[1200px] px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="overflow-hidden [--card:100%] md:[--card:calc((100%_-_48px)/3)]">
          {/* cards are sized off the container, so a full card always lands
              inside the frame instead of being sliced by the right edge */}
          <div
            className="flex items-start gap-6 transition-transform duration-700"
            style={{
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transform: `translateX(calc(${-index} * (var(--card) + 24px)))`,
            }}
          >
            {ACHIEVEMENTS.map((item) => (
              <article
                key={item.project}
                className="w-[var(--card)] shrink-0 overflow-hidden rounded-[32px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:rounded-[40px]"
              >
                {item.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.project}
                    className="h-44 w-full object-cover"
                  />
                )}
                <div className="px-8 py-8">
                  <p className="font-serif text-3xl text-[#0D212C]">{item.headline}</p>
                  <p className="mt-1 text-base font-medium text-[#0D212C]">{item.project}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#051A24]/70">
                    {item.detail}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#051A24]/[0.05] px-3 py-1 text-xs text-[#051A24]/70"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto font-mono text-[11px] text-[#051A24]/40">
                      {item.meta}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center gap-1.5 text-sm text-[#051A24] underline-offset-4 hover:underline"
                      >
                        {link.icon === "github" ? (
                          <Github className="h-3.5 w-3.5" />
                        ) : (
                          <ExternalLink className="h-3.5 w-3.5" />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex gap-3">
          <button
            type="button"
            aria-label="Previous achievement"
            onClick={prev}
            className="grid h-12 w-12 place-items-center rounded-full border border-[#0D212C]/20 text-[#0D212C] transition-colors hover:border-[#0D212C]/50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next achievement"
            onClick={next}
            className="grid h-12 w-12 place-items-center rounded-full border border-[#0D212C]/20 text-[#0D212C] transition-colors hover:border-[#0D212C]/50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
