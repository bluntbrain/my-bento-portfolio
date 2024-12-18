import React from "react";
import { Card } from "../ui/card";
import { ViewAllButton } from "../ui/view-all-button";

interface BlockchainProps {
  onOpenChange: (open: boolean) => void;
}

export function Blockchain({ onOpenChange }: BlockchainProps) {
  return (
    <Card
      className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900"
      onClick={() => onOpenChange(true)}
      viewAllButton={<ViewAllButton onClick={() => onOpenChange(true)} />}
      variant="solidity"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Solidity & EVM</h2>
      <p className="mb-4 text-sm sm:text-base">
        I&apos;ve been involved with blockchain companies since last 2+ years
      </p>
    </Card>
  );
}
