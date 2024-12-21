import React from "react";
import { Card } from "../ui/card";
import { Github } from "lucide-react";

export function FoundryProjects() {
  return (
    <>
      {/* DSC Stablecoin Project */}
      <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-zinc-900 p-6 relative min-h-[240px]">
        <div className="absolute top-1 right-1 flex gap-2">
          <span className="px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs">
            Foundry
          </span>
          <span className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs">
            Solidity
          </span>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-yellow-400">
            Decentralized Stablecoin System
          </h3>
          <p className="text-gray-400 mb-4">
            A decentralized, multi-collateral stablecoin system pegged 1:1 with
            USD. Features WETH/WBTC collateral, Chainlink price feeds, 150%
            minimum collateralization ratio, and automatic liquidations. Built
            with gas-optimized smart contracts and comprehensive testing in
            Foundry.
          </p>
        </div>
        <div className="absolute bottom-1">
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
      </Card>

      {/* Flash Loans Project */}
      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900 p-6 relative min-h-[240px]">
        <div className="absolute top-1 right-1 flex gap-2">
          <span className="px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs">
            Foundry
          </span>
          <span className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs">
            Solidity
          </span>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-yellow-400">
            Flash Loans
          </h3>
          <p className="text-gray-400 mb-4">
            A comprehensive implementation of flash loans using Foundry.
            Includes arbitrage examples and security considerations.
          </p>
        </div>
        <div className="absolute bottom-1 ">
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
      </Card>

      {/* Account Abstraction Wallet */}
      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900 p-6 relative min-h-[240px]">
        <div className="absolute top-1 right-1 flex gap-2">
          <span className="px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs">
            Foundry
          </span>
          <span className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs">
            Solidity
          </span>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-yellow-400">
            ERC-4337 SW
          </h3>
          <p className="text-gray-400 mb-4">
            An implementation of account abstraction following ERC-4337.
            Features include social recovery and gas abstraction.
          </p>
        </div>
        <div className="absolute bottom-1">
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
      </Card>
    </>
  );
}
