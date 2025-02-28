import React from "react";
import { Card } from "../ui/card";

interface CertificationsProps {
  setCertificationsDialogOpen: (open: boolean) => void;
}

export function Certifications({
  setCertificationsDialogOpen,
}: CertificationsProps) {
  return (
    <Card
      className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900"
      onClick={() => setCertificationsDialogOpen(true)}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Certifications</h2>
      <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
        <li>Ultimate Rust Crash Course by Nathan Stocks</li>
        <li>Rust Intermediate Concepts by Nathan Stocks</li>
        <li>GO The Complete Guide by Maximilian Schwarzmüller</li>
        <li>React Native : Advanced Concepts by Stephen Grider</li>
        <li>React + Hooks by Stephen Grider</li>
      </ul>
    </Card>
  );
}
