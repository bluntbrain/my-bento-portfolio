import React from "react";
import { Card } from "../ui/card";
import { Github, ExternalLink } from "lucide-react";

export function Achievements() {
  return (
    <>
      {/* StarkHack Card */}
      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900 p-6 relative min-h-[240px]">
        <div>
          <h3 className="font-bold text-lg mb-2 text-blue-400">
            StarkHack Winner 🏆
          </h3>
          <p className="text-gray-400 mb-4">
            Won $4,000 for developing Chain Monsters, an innovative
            blockchain-based game
          </p>
        </div>
        <div className="flex flex-wrap gap-2 absolute bottom-6">
          <a
            href="https://ethglobal.com/showcase/chain-monsters-o26dw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline flex items-center gap-1"
          >
            <ExternalLink size={16} />
            <span>ETH Global</span>
          </a>
          <a
            href="https://github.com/Krane-Apps/chain-monsters"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </Card>

      {/* SuperHack Card */}
      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900 p-6 relative min-h-[240px]">
        <div>
          <h3 className="font-bold text-lg mb-2 text-purple-400">
            SuperHack Winner 🚀
          </h3>
          <p className="text-gray-400 mb-4">
            Secured $10,000 prize for Repo Reward, a revolutionary developer
            incentivization platform
          </p>
        </div>
        <div className="flex flex-wrap gap-2 absolute bottom-6">
          <a
            href="https://ethglobal.com/showcase/repo-rewards-su0bh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline flex items-center gap-1"
          >
            <ExternalLink size={16} />
            <span>ETH Global</span>
          </a>
          <a
            href="https://github.com/Krane-Apps/repo-rewards-superhack-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </Card>

      {/* ETH Singapore Card */}
      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900 p-6 relative min-h-[240px]">
        <div>
          <h3 className="font-bold text-lg mb-2 text-blue-400">
            ETH Singapore 🌟
          </h3>
          <p className="text-gray-400 mb-4">
            Developed Inspector AI, a Chrome extension that provides
            AI-generated safety reports for smart contracts
          </p>
        </div>
        <div className="flex flex-wrap gap-2 absolute bottom-6">
          <a
            href="https://ethglobal.com/showcase/inspector-ai-s5mw5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline flex items-center gap-1"
          >
            <ExternalLink size={16} />
            <span>ETH Global</span>
          </a>
          <a
            href="https://github.com/Krane-Apps/inspector-ai-eth-singapore-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </Card>

      {/* ETH Bangkok Card */}
      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900 p-6 relative min-h-[240px]">
        <div>
          <h3 className="font-bold text-lg mb-2 text-purple-400">
            ETH Bangkok Winner 🏆
          </h3>
          <p className="text-gray-400 mb-4">
            Won $2,000 for developing ZK Credit Score, an innovative
            blockchain-based credit scoring system using ZK Proofs
          </p>
        </div>
        <div className="flex flex-wrap gap-2 absolute bottom-6">
          <a
            href="https://ethglobal.com/showcase/zk-credit-score-pa7r4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline flex items-center gap-1"
          >
            <ExternalLink size={16} />
            <span>ETH Global</span>
          </a>
          <a
            href="https://ethglobal.com/showcase/zk-credit-score-pa7r4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </Card>
    </>
  );
}
