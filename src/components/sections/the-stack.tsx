// the stack, with real brand marks
"use client";

import React from "react";
import { FaAws } from "react-icons/fa6";
import {
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiPostgresql,
  SiRedis,
  SiGithubactions,
  SiCloudflare,
  SiVercel,
  SiFirebase,
  SiSupabase,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiReact,
  SiExpo,
  SiSwift,
  SiKotlin,
  SiAndroid,
  SiApple,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiSolana,
  SiSolidity,
  SiEthereum,
  SiRust,
  SiPython,
  SiGo,
  SiGit,
  SiLangchain,
  SiEthers,
} from "react-icons/si";
import { useInView } from "@/lib/utils";

type Mark = React.ComponentType<{ className?: string }>;

interface StackGroup {
  group: string;
  lead: string;
  items: { name: string; Icon: Mark }[];
}

const STACK: StackGroup[] = [
  {
    group: "Infrastructure",
    lead: "What I own at Spout",
    items: [
      { name: "Terraform", Icon: SiTerraform },
      { name: "AWS", Icon: FaAws },
      { name: "Fargate", Icon: FaAws },
      { name: "RDS", Icon: SiPostgresql },
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "Docker", Icon: SiDocker },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Git", Icon: SiGit },
      { name: "Cloudflare", Icon: SiCloudflare },
      { name: "Redis", Icon: SiRedis },
    ],
  },
  {
    group: "Mobile",
    lead: "Seven years, apps at 10M+ users",
    items: [
      { name: "React Native", Icon: SiReact },
      { name: "Expo", Icon: SiExpo },
      { name: "iOS", Icon: SiApple },
      { name: "Android", Icon: SiAndroid },
      { name: "Swift", Icon: SiSwift },
      { name: "Kotlin", Icon: SiKotlin },
    ],
  },
  {
    group: "Frontend",
    lead: "DeFi interfaces at $10M+ volume",
    items: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "TailwindCSS", Icon: SiTailwindcss },
      { name: "Redux", Icon: SiRedux },
      { name: "Ethers.js", Icon: SiEthers },
      { name: "Vercel", Icon: SiVercel },
    ],
  },
  {
    group: "Backend",
    lead: "APIs, jobs and data behind the apps",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Nest.js", Icon: SiNestjs },
      { name: "Express", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "GraphQL", Icon: SiGraphql },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Supabase", Icon: SiSupabase },
      { name: "Python", Icon: SiPython },
      { name: "Go", Icon: SiGo },
      { name: "LangChain", Icon: SiLangchain },
    ],
  },
  {
    group: "Smart contracts",
    lead: "Rust and Anchor on Solana, Solidity on EVM",
    items: [
      { name: "Rust", Icon: SiRust },
      { name: "Solana", Icon: SiSolana },
      { name: "Anchor", Icon: SiSolana },
      { name: "Pinocchio", Icon: SiRust },
      { name: "Solidity", Icon: SiSolidity },
      { name: "Foundry", Icon: SiEthereum },
    ],
  },
];

export function TheStack() {
  return (
    <section id="stack" className="mx-auto max-w-[1200px] px-6 py-16">
      <Reveal>
        <h2 className="text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]">
          What I <span className="font-serif">build with.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#051A24]/70 md:text-base">
          Everything here is something I have shipped with, not read about. Terraform and
          AWS underneath, React Native and Next.js on top, Rust and Solidity where the
          money moves.
        </p>
      </Reveal>

      <div className="mt-12 flex flex-col">
        {STACK.map((row, index) => (
          <Reveal key={row.group} delay={0.05 * index}>
            <div className="flex flex-col gap-4 border-t border-[#051A24]/10 py-7 md:flex-row md:gap-10">
              <div className="md:w-56 md:shrink-0">
                <p className="font-mono text-xs uppercase tracking-widest text-[#051A24]/45">
                  {row.group}
                </p>
                <p className="mt-1 text-xs text-[#051A24]/45">{row.lead}</p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {row.items.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#051A24] shadow-[0_0_0_0.5px_rgba(0,0,0,0.07),0_2px_10px_rgba(0,0,0,0.05)]"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#051A24]" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Reveal({
  delay = 0,
  children,
}: {
  delay?: number;
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
