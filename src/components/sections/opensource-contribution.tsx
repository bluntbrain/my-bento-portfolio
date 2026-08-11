// open source contribution
"use client";

import React from "react";
import { GitMerge, Star, ExternalLink } from "lucide-react";
import { Em } from "../ui/pill-button";
import { useInView } from "@/lib/utils";

const FEATURED_PRS = [
  { number: 760, title: "casino skill for card games" },
  { number: 655, title: "autonomous task generation" },
  { number: 543, title: "token skills, defi and nfts" },
];


const Fade = ({
  delay,
  children,
  className = "",
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export function OpenSourceContribution() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12">
      <Fade delay={0.1}>
        <p className="inline-flex items-center gap-2 rounded-full bg-[#b9f24d] px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-[#051A24]">
          <Star className="h-3.5 w-3.5" />
          Top outside contributor
        </p>
        <h2 className="mt-5 text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]">
          <span className="font-serif">45 pull requests</span> merged into a{" "}
          <span className="font-serif">6,500-star</span> AI agent framework.
        </h2>
      </Fade>

      <Fade delay={0.2}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#051A24]/70 md:text-base">
          <Em loud>The single largest outside contributor</Em> to{" "}
          <a
            href="https://github.com/crestalnetwork/intentkit"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#051A24] underline decoration-2 underline-offset-4"
          >
            IntentKit
          </a>
          , an AI agent framework running on Base. <Em>45+ agent tools</Em> written in
          Python with LangChain, from DeFi and NFT actions to autonomous task
          generation.
        </p>
      </Fade>

      <Fade delay={0.3}>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "45", label: "Pull requests merged", icon: GitMerge },
            { value: "6.5K+", label: "Stars on the repo", icon: Star },
            { value: "45+", label: "Agent tools shipped", icon: GitMerge },
            { value: "#1", label: "Outside contributor", icon: Star },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[28px] bg-white px-6 py-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <stat.icon className="h-4 w-4 text-[#051A24]/40" />
              <p className="mt-4 font-serif text-3xl text-[#0D212C]">{stat.value}</p>
              <p className="mt-1 text-sm text-[#051A24]/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Fade>

      <Fade delay={0.4}>
        <div className="mt-4 flex flex-col gap-2">
          {FEATURED_PRS.map((pr) => (
            <a
              key={pr.number}
              href={`https://github.com/crestalnetwork/intentkit/pull/${pr.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
            >
              <GitMerge className="h-4 w-4 shrink-0 text-[#051A24]" />
              <span className="font-mono text-sm text-[#051A24]/50">#{pr.number}</span>
              <span className="truncate text-sm text-[#051A24]">{pr.title}</span>
              <ExternalLink className="ml-auto h-3.5 w-3.5 shrink-0 text-[#051A24]/40" />
            </a>
          ))}
        </div>
      </Fade>
    </section>
  );
}

