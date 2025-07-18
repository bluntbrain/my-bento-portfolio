"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Toaster } from "react-hot-toast";

import { certifications, solanaProjects } from "@/lib/data";
import { frontendProjects } from "@/lib/data";
import { WorkExperienceSection } from "@/components/sections/work-experience-section";

import { Blockchain } from "@/components/sections/blockchain";
import { ViewAllDialog } from "@/components/ui/view-all-dialog";
import { Rust } from "@/components/sections/rust";
import { FrontendSection } from "@/components/sections/frontend-section";
import { blockchainProjects } from "@/lib/data";
import { ContactSection } from "@/components/sections/contact-section";
import { Header } from "@/components/sections/header";
import { Achievements } from "@/components/sections/achievements";
import { Footer } from "@/components/sections/footer";
import { Solana } from "@/components/sections/solana";
import { TechSelection } from "@/components/sections/tech-selection";
import { RustSolanaDetails } from "@/components/sections/tech-details/rust-solana-details";
import { FrontendDetails } from "@/components/sections/tech-details/frontend-details";
import { MobileDetails } from "@/components/sections/tech-details/mobile-details";
import { SolidityEvmDetails } from "@/components/sections/tech-details/solidity-evm-details";

export default function Home() {
  const searchParams = useSearchParams();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [blockchainDialogOpen, setBlockchainDialogOpen] = React.useState(false);
  const [frontendDialogOpen, setFrontendDialogOpen] = React.useState(false);
  const [solanaDialogOpen, setSolanaDialogOpen] = React.useState(false);
  const [certificationsDialogOpen, setCertificationsDialogOpen] =
    React.useState(false);

  useEffect(() => {
    const tech = searchParams.get('tech');
    if (tech && ['rust-solana', 'solidity-evm', 'frontend', 'mobile'].includes(tech)) {
      setSelectedTech(tech);
    }
  }, [searchParams]);

  const handleTechSelect = (tech: string) => {
    setSelectedTech(tech);
    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set('tech', tech);
    window.history.pushState({}, '', url.toString());
  };

  const handleBackToSelection = () => {
    setSelectedTech(null);
    // Remove tech param from URL
    const url = new URL(window.location.href);
    url.searchParams.delete('tech');
    window.history.pushState({}, '', url.toString());
  };

  // Show tech-specific details if a tech is selected
  if (selectedTech === 'rust-solana') {
    return (
      <>
        <Toaster position="top-center" />
        <RustSolanaDetails onBack={handleBackToSelection} />
      </>
    );
  }

  if (selectedTech === 'solidity-evm') {
    return (
      <>
        <Toaster position="top-center" />
        <SolidityEvmDetails onBack={handleBackToSelection} />
      </>
    );
  }

  if (selectedTech === 'frontend') {
    return (
      <>
        <Toaster position="top-center" />
        <FrontendDetails onBack={handleBackToSelection} />
      </>
    );
  }

  if (selectedTech === 'mobile') {
    return (
      <>
        <Toaster position="top-center" />
        <MobileDetails onBack={handleBackToSelection} />
      </>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-black text-white">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Contact */}
        <ContactSection />
        
        {/* Tech Selection Blocks */}
        <TechSelection onTechSelect={handleTechSelect} />
        
        <Header />

        {/* Work Experience and Achievements side by side */}
        <WorkExperienceSection />
        <Achievements />

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
  );
}
