import React from "react";
import { Card } from "../ui/card";
import { ExternalLink } from "lucide-react";

// rust protocol engineer component - displays solana smart contracts overview
export function Rust() {
  const REPO_LINK = "https://github.com/bluntbrain/solana-projects";

  const solanaPrograms = [
    { title: "Calculator", description: "Arithmetic operations with Anchor", tags: ["Anchor", "Beginner"] },
    { title: "Vault", description: "SOL deposits and withdrawals", tags: ["Anchor", "Beginner"] },
    { title: "Escrow", description: "Trustless token swaps", tags: ["Anchor", "Beginner"] },
    { title: "Flash Loan", description: "Atomic flash loan protocol", tags: ["Anchor", "Intermediate"] },
    { title: "Staking", description: "SOL staking with rewards", tags: ["Anchor", "DeFi"] },
    { title: "AMM", description: "Automated market maker", tags: ["Pinocchio", "Advanced"] },
    { title: "Quantum Vault", description: "Quantum-resistant vault", tags: ["Pinocchio", "Intermediate"] },
    { title: "Assembly Memo", description: "On-chain memo in assembly", tags: ["Assembly", "Intermediate"] },
  ];

  return (
    <Card
      className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900 p-6"
      variant="rust"
    >
      <div className="relative z-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Rust Protocol Engineer</h2>
          <a
            href={REPO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors border border-primary/30 text-sm"
          >
            <ExternalLink size={14} />
            View All on GitHub
          </a>
        </div>

        {/* solana programs grid */}
        <h3 className="text-lg font-bold mb-4 text-gray-300">Solana Smart Contracts & Programs</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {solanaPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-zinc-800/80 backdrop-blur-sm rounded-lg p-3 border border-zinc-700 hover:border-primary/50 transition-all"
            >
              <div className="flex gap-1 mb-2">
                {program.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-1.5 py-0.5 ${
                      tag === "Pinocchio" || tag === "Advanced"
                        ? "bg-accent/10 text-accent"
                        : tag === "Assembly"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-primary/10 text-primary"
                    } rounded text-[10px]`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-semibold text-sm text-white mb-1">
                {program.title}
              </h3>
              <p className="text-gray-300 text-xs mb-2">
                {program.description}
              </p>
              <a
                href={REPO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20 rounded text-[10px] border border-primary/20 transition-colors w-fit"
              >
                <ExternalLink size={10} />
                View Source
              </a>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
