"use client";

import React from "react";

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

        {/* Work Experience and Achievements side by side */}
        <WorkExperienceSection />
        <Achievements />

        {/* Rust Experience & Projects */}
        <Rust />

        {/* Frontend Experience & Projects */}
        <FrontendSection />

        {/* Blockchain Experience */}
        <Blockchain />

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
