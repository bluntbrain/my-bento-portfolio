import React from "react";
import { Card } from "../ui/card";
import { Github } from "lucide-react";

export function FoundryProjects() {
  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900 p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 px-4">
        Foundry (Solidity) Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* DSC Stablecoin Project */}
        <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all h-full flex flex-col">
          <div className="flex-grow">
            <h3 className="font-bold text-lg mb-2 text-yellow-400">
              DSC Stablecoin
            </h3>
            <p className="text-gray-400 mb-4">
              An exogenously collateralized, dollar-pegged, algorithmically
              stable cryptocurrency. Built with robust smart contracts and
              testing.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <a
              href="https://github.com/bluntbrain/stable-coin-foundry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-1"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Flash Loans Project */}
        <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all h-full flex flex-col">
          <div className="flex-grow">
            <h3 className="font-bold text-lg mb-2 text-yellow-400">
              Flash Loans Implementation
            </h3>
            <p className="text-gray-400 mb-4">
              A comprehensive implementation of flash loans using Foundry.
              Includes arbitrage examples and security considerations.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <a
              href="https://github.com/bluntbrain/flash-loan-foundry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-1"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Account Abstraction Wallet */}
        <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all h-full flex flex-col">
          <div className="flex-grow">
            <h3 className="font-bold text-lg mb-2 text-yellow-400">
              ERC-4337 Smart Wallet
            </h3>
            <p className="text-gray-400 mb-4">
              An implementation of account abstraction following ERC-4337.
              Features include social recovery and gas abstraction.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <a
              href="https://github.com/bluntbrain/erc-4337-smart-wallet-foundry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-1"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
