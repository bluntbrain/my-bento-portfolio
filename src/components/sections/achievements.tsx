import React from "react";
import { Card } from "../ui/card";
import { Github, ExternalLink } from "lucide-react";

export function Achievements() {
  const hackathons = [
    {
      title: "StarkHack Winner 🏆",
      prize: "$4,000",
      project: "Chain Monsters",
      period: "March 2024",
      description: "An innovative blockchain-based game",
      ethGlobalLink: "https://ethglobal.com/showcase/chain-monsters-o26dw",
      githubLink: "https://github.com/Krane-Apps/chain-monsters",
      tags: ["StarkNet", "Cairo", "Gaming"],
    },
    {
      title: "SuperHack Winner 🚀",
      prize: "$10,000",
      project: (
        <span className="text-green-400 font-semibold">Repo Reward</span>
      ),
      period: "February 2024",
      description: "A revolutionary developer incentivization platform",
      ethGlobalLink: "https://ethglobal.com/showcase/repo-rewards-su0bh",
      githubLink: "https://github.com/Krane-Apps/repo-rewards-superhack-2024",
      tags: ["Base", "Solidity", "DeFi"],
    },
    {
      title: "ETH Singapore 🌟",
      project: "Inspector AI",
      period: "January 2024",
      description:
        "Chrome extension providing AI-generated safety reports for smart contracts",
      ethGlobalLink: "https://ethglobal.com/showcase/inspector-ai-s5mw5",
      githubLink:
        "https://github.com/Krane-Apps/inspector-ai-eth-singapore-2024",
      tags: ["AI", "Security", "Chrome Extension"],
    },
    {
      title: "ETH Bangkok Winner 🏆",
      prize: "$2,000",
      project: "ZK Credit Score",
      period: "December 2023",
      description: "Blockchain-based credit scoring system using ZK Proofs",
      ethGlobalLink: "https://ethglobal.com/showcase/zk-credit-score-pa7r4",
      githubLink: "https://ethglobal.com/showcase/zk-credit-score-pa7r4",
      tags: ["ZK Proofs", "DeFi", "Privacy"],
    },
  ];

  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold mb-6">Achievements 🏆</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-full w-px bg-zinc-700" />

        {/* Achievement items */}
        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="relative pl-6">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-green-500" />

              <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 border border-zinc-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-blue-400">
                    {hackathon.title}
                  </h3>
                  <span className="text-sm text-gray-400">
                    {hackathon.period}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-green-400">
                    {hackathon.project}
                    {hackathon.prize && ` • Prize: ${hackathon.prize}`}
                  </span>
                </div>
                <p className="text-gray-400 mb-3 text-sm">
                  {hackathon.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {hackathon.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-green-400/10 text-green-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={hackathon.ethGlobalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>ETH Global</span>
                  </a>
                  <a
                    href={hackathon.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
