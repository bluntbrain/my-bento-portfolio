"use client";

import React from "react";

import { Toaster } from "react-hot-toast";

import { certifications, solanaProjects } from "@/lib/data";
import { frontendProjects } from "@/lib/data";
import { Certifications } from "@/components/sections/certifications";
import { WorkExperienceSection } from "@/components/sections/work-experience-section";
import { GoExperience } from "@/components/sections/go-experience";
import { Solana } from "@/components/sections/solana";
import { Blockchain } from "@/components/sections/blockchain";
import { ViewAllDialog } from "@/components/ui/view-all-dialog";
import { Rust } from "@/components/sections/rust";
import { FrontendSection } from "@/components/sections/frontend-section";
import { blockchainProjects } from "@/lib/data";
import { ContactSection } from "@/components/sections/contact-section";
import { Header } from "@/components/sections/header";
import { Achievements } from "@/components/sections/achievements";

export default function Home() {
  const [blockchainDialogOpen, setBlockchainDialogOpen] = React.useState(false);
  const [frontendDialogOpen, setFrontendDialogOpen] = React.useState(false);
  const [solanaDialogOpen, setSolanaDialogOpen] = React.useState(false);
  const [certificationsDialogOpen, setCertificationsDialogOpen] =
    React.useState(false);

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-black text-white">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Contact - Fixed layout */}
        <ContactSection />
        <Header />

        {/* Achievements */}
        <Achievements />

        {/* Frontend Projects */}
        <FrontendSection setFrontendDialogOpen={setFrontendDialogOpen} />

        {/* Rust Experience */}
        <Rust />

        {/* Blockchain Experience */}
        <Blockchain onOpenChange={setBlockchainDialogOpen} />

        {/* Solana Expert */}
        <Solana onOpenChange={setSolanaDialogOpen} />

        {/* GO Experience */}
        <GoExperience />

        {/* Work Experience */}
        <WorkExperienceSection />
        {/* Certifications */}
        <Certifications
          setCertificationsDialogOpen={setCertificationsDialogOpen}
        />
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
