import React from "react";
import { Card } from "../ui/card";
import { ViewAllButton } from "../ui/view-all-button";

export function FrontendSection({
  setFrontendDialogOpen,
}: {
  setFrontendDialogOpen: (open: boolean) => void;
}) {
  return (
    <Card
      className="col-span-1 sm:col-span-2 bg-zinc-900"
      onClick={() => setFrontendDialogOpen(true)}
      viewAllButton={
        <ViewAllButton onClick={() => setFrontendDialogOpen(true)} />
      }
      variant="frontend"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Frontend Projects</h2>
      <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
        <li>Next.js Movie Ballot App</li>
        <li>Coupl App (React Native)</li>
        <li>Cryo Circuit App (React Native)</li>
        <li>Swipable News Headlines App (React Native)</li>
        <li>Location-based Chat Application (React Native)</li>
      </ul>
    </Card>
  );
}
