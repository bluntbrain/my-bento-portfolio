"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { Toaster } from "react-hot-toast";

import { certifications, solanaProjects } from "@/lib/data";
import { frontendProjects } from "@/lib/data";
import { WorkExperienceSection } from "@/components/sections/work-experience-section";

import { ViewAllDialog } from "@/components/ui/view-all-dialog";
import { blockchainProjects } from "@/lib/data";
import { ContactSection } from "@/components/sections/contact-section";
import { Header } from "@/components/sections/header";
import { Achievements } from "@/components/sections/achievements";
import { Footer } from "@/components/sections/footer";
import { TechSelection } from "@/components/sections/tech-selection";
import { SolanaDetails } from "@/components/sections/tech-details/solana-details";
import { FrontendDetails } from "@/components/sections/tech-details/frontend-details";
import { MobileDetails } from "@/components/sections/tech-details/mobile-details";
import { SolidityEvmDetails } from "@/components/sections/tech-details/solidity-evm-details";

function HomeContent() {
  const searchParams = useSearchParams();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [blockchainDialogOpen, setBlockchainDialogOpen] = React.useState(false);
  const [frontendDialogOpen, setFrontendDialogOpen] = React.useState(false);
  const [solanaDialogOpen, setSolanaDialogOpen] = React.useState(false);
  const [certificationsDialogOpen, setCertificationsDialogOpen] =
    React.useState(false);

  useEffect(() => {
    const tech = searchParams.get("tech");
    if (
      tech &&
      [
        "rust",
        "solana",
        "solidity",
        "solidity-evm",
        "frontend",
        "mobile",
      ].includes(tech)
    ) {
      // Handle legacy URL params
      if (tech === "rust") {
        setSelectedTech("solana");
      } else if (tech === "solidity") {
        setSelectedTech("solidity-evm");
      } else {
        setSelectedTech(tech);
      }
    }
  }, [searchParams]);

  const handleTechSelect = (tech: string) => {
    setSelectedTech(tech);
    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set("tech", tech);
    window.history.pushState({}, "", url.toString());

    // Smooth scroll to the tech content section after a brief delay
    setTimeout(() => {
      const techContentElement = document.getElementById(
        "tech-content-section"
      );
      if (techContentElement) {
        techContentElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 100);
  };

  const handleBackToSelection = () => {
    setSelectedTech(null);
    // Remove tech param from URL
    const url = new URL(window.location.href);
    url.searchParams.delete("tech");
    window.history.pushState({}, "", url.toString());
  };

  // Render tech-specific content inline
  const renderTechContent = () => {
    switch (selectedTech) {
      case "solana":
        return (
          <div
            id="tech-content-section"
            className="col-span-1 sm:col-span-2 lg:col-span-4"
          >
            <SolanaDetails onBack={handleBackToSelection} />
          </div>
        );
      case "solidity-evm":
        return (
          <div
            id="tech-content-section"
            className="col-span-1 sm:col-span-2 lg:col-span-4"
          >
            <SolidityEvmDetails onBack={handleBackToSelection} />
          </div>
        );
      case "frontend":
        return (
          <div
            id="tech-content-section"
            className="col-span-1 sm:col-span-2 lg:col-span-4"
          >
            <FrontendDetails onBack={handleBackToSelection} />
          </div>
        );
      case "mobile":
        return (
          <div
            id="tech-content-section"
            className="col-span-1 sm:col-span-2 lg:col-span-4"
          >
            <MobileDetails onBack={handleBackToSelection} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen p-4 sm:p-6 bg-black text-white">
        <Toaster position="top-center" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Contact */}
          <ContactSection />

          <Header />

          {/* Work Experience and Achievements side by side */}
          <WorkExperienceSection />
          <Achievements />

          {/* Tech Selection Blocks - Only show if no tech is selected */}
          {!selectedTech && <TechSelection onTechSelect={handleTechSelect} />}

          {/* Tech-specific content - Show below tech selection */}
          {renderTechContent()}

          {/* Footer */}
          <Footer />
        </div>

        {/* Render ViewAllDialog components */}
        <ViewAllDialog
          title="Blockchain Projects"
          items={blockchainProjects}
          open={blockchainDialogOpen}
          onOpenChange={setBlockchainDialogOpen}
        />
        <ViewAllDialog
          title="Frontend Projects"
          items={frontendProjects}
          open={frontendDialogOpen}
          onOpenChange={setFrontendDialogOpen}
        />
        <ViewAllDialog
          title="Solana Projects"
          items={solanaProjects}
          open={solanaDialogOpen}
          onOpenChange={setSolanaDialogOpen}
        />
        <ViewAllDialog
          title="All Certifications"
          items={certifications}
          open={certificationsDialogOpen}
          onOpenChange={setCertificationsDialogOpen}
        />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <HomeContent />
    </Suspense>
  );
}
