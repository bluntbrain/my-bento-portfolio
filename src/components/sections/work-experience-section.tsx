// what i do (two cards) and the career timeline
"use client";

import React from "react";
import Image from "next/image";
import { PillButton } from "../ui/pill-button";
import { useInView } from "@/lib/utils";

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

interface Experience {
  title: string;
  company: string;
  logo: string;
  logoTile?: boolean;
  period: string;
  duration: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "Infrastructure Lead",
    company: "Spout Finance",
    logo: "/images/logos/spout-mark.svg",
    logoTile: true,
    period: "Apr 2026 - Present",
    duration: "4 mos",
    points: [
      "Own the cloud: Terraform, AWS, Fargate, RDS and Kubernetes",
      "CI/CD, environments and release pipelines for the whole engineering team",
      "Tokenised real-world assets, so the infrastructure carries real money",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "SendAI",
    logo: "/images/sendai.png",
    period: "Sep 2025 - Mar 2026",
    duration: "7 mos",
    points: [
      "Consumer mobile apps at the intersection of Solana and AI",
      "Mobile-first apps built directly on the Solana blockchain",
      "Seven years of mobile work applied to products that scale to 10M+ users",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company: "DxSale Network",
    logo: "/images/dxsale.png",
    period: "Mar 2024 - Aug 2025",
    duration: "1 yr 6 mos",
    points: [
      "Built the core frontend for a DeFi launchpad in Next.js and TailwindCSS",
      "500+ token sales launched, $100K+ in fees from $10M+ of volume",
      "Grew organic traffic 3x through SEO",
    ],
  },
  {
    title: "Co-founder",
    company: "Krane Apps",
    logo: "/images/kraneapps.png",
    period: "Feb 2023 - Mar 2024",
    duration: "1 yr 2 mos",
    points: [
      "Led a team of 10 across Nest.js and Next.js",
      "Shipped blockchain products and DeFi apps including Glitter Finance",
    ],
  },
  {
    title: "Frontend Team Lead",
    company: "Jar App",
    logo: "/images/jarapp.png",
    period: "Feb 2022 - Feb 2023",
    duration: "1 yr",
    points: [
      "Led the frontend team of 8, mentoring and running peer reviews",
      "Improved app performance by 60% at 10M+ users",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Fleek",
    logo: "/images/fleek.png",
    period: "Jan 2020 - Feb 2022",
    duration: "2 yrs 2 mos",
    points: [
      "Built a PWA in React.js and the flagship app in React Native",
      "Cut bundle size by 45% through code splitting",
    ],
  },
];

export function WhatIDo() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Fade delay={0.1}>
          <div className="h-full rounded-[32px] bg-[#051A24] px-8 pb-8 pt-7 shadow-[inset_0_2px_20px_0_rgba(255,255,255,0.06)]">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#b9f24d]">
              Infrastructure
            </p>
            <h3 className="mt-3 text-[22px] font-medium text-[#F6FCFF]">
              I own the cloud
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#E0EBF0]/75">
              Terraform, AWS, Fargate, RDS and Kubernetes. Environments, pipelines and
              the release path, not just the app on top of them.
            </p>
            <p className="mt-7 text-2xl text-[#F6FCFF]">Infra Lead</p>
            <p className="text-sm text-[#E0EBF0]/60">Spout Finance, today</p>
          </div>
        </Fade>

        <Fade delay={0.15}>
          <div className="h-full rounded-[32px] bg-white px-8 pb-8 pt-7 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#051A24]/45">
              Product
            </p>
            <h3 className="mt-3 text-[22px] font-medium text-[#0D212C]">
              Mobile, frontend, backend
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#051A24]/70">
              React Native and Next.js on the outside, Node and Postgres behind them.
              Seven years, teams of 8 to 10.
            </p>
            <p className="mt-7 text-2xl text-[#0D212C]">10M+</p>
            <p className="text-sm text-[#051A24]/60">Users reached</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <PillButton href="/mobile" variant="secondary" className="px-5 py-2 text-xs">
                Mobile
              </PillButton>
              <PillButton href="/frontend" variant="secondary" className="px-5 py-2 text-xs">
                Frontend
              </PillButton>
            </div>
          </div>
        </Fade>

        <Fade delay={0.2}>
          <div className="h-full rounded-[32px] bg-white px-8 pb-8 pt-7 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#051A24]/45">
              Smart contracts
            </p>
            <h3 className="mt-3 text-[22px] font-medium text-[#0D212C]">
              Rust, Anchor, Solidity
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#051A24]/70">
              Staking programs, AMMs, a collateralised stablecoin, ZK proofs. Written,
              tested and shipped, not read about.
            </p>
            <p className="mt-7 text-2xl text-[#0D212C]">3 chains</p>
            <p className="text-sm text-[#051A24]/60">Solana, EVM, StarkNet</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <PillButton href="/solana" variant="secondary" className="px-5 py-2 text-xs">
                Solana
              </PillButton>
              <PillButton href="/ethereum" variant="secondary" className="px-5 py-2 text-xs">
                EVM
              </PillButton>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export function WorkExperienceSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12">
      <Fade delay={0.1}>
        <h2 className="text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]">
          Seven years, <span className="font-serif">six teams.</span>
        </h2>
      </Fade>

      <div className="mt-12 flex flex-col">
        {experiences.map((exp, index) => (
          <Fade key={exp.company} delay={0.1 + index * 0.05}>
            <div className="flex flex-col gap-4 border-t border-[#051A24]/10 py-6 md:flex-row md:gap-12">
              <div className="md:w-56 md:shrink-0">
                <p className="font-mono text-xs text-[#051A24]/50">{exp.period}</p>
                <p className="font-mono text-xs text-[#051A24]/35">{exp.duration}</p>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  {/* the spout mark is a white wordmark, so it needs its brand navy behind it */}
                  <span
                    className={
                      exp.logoTile
                        ? "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#082567]"
                        : "contents"
                    }
                  >
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={36}
                      height={36}
                      className={
                        exp.logoTile ? "h-4 w-auto" : "h-9 w-9 rounded-xl object-cover"
                      }
                    />
                  </span>
                  <h3 className="font-serif text-2xl text-[#051A24] md:text-3xl">
                    {exp.company}
                  </h3>
                </div>
                <p className="mt-3 text-base text-[#051A24]">{exp.title}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {exp.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-[#051A24]/70">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
