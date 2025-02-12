import React from "react";
import { Card } from "../ui/card";

export function FoundryProjects() {
  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900 p-6 relative min-h-[240px]">
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
          Foundry Testing Framework
        </h3>
        <p className="text-gray-400 mb-4">
          Extensive experience with Foundry for smart contract development and
          testing. Proficient in writing comprehensive test suites, fuzzing
          tests, and gas optimization analysis.
        </p>
      </div>
    </Card>
  );
}
