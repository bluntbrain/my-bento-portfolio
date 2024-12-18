import React from "react";
import { ViewAllButton } from "../ui/view-all-button";
import { Card } from "../ui/card";

interface SolanaProps {
  onOpenChange: (open: boolean) => void;
}

export function Solana({ onOpenChange }: SolanaProps) {
  return (
    <Card
      className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900"
      onClick={() => onOpenChange(true)}
      viewAllButton={<ViewAllButton onClick={() => onOpenChange(true)} />}
      variant="solana"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Solana</h2>
      <p className="mb-4 text-sm sm:text-base">
        I&apos;ve made quite a few projects in Solana, finally found time to
        upload it :)
      </p>
    </Card>
  );
}
