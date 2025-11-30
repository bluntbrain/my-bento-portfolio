"use client";

import React from "react";
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
import { FeaturedProjects } from "@/components/sections/featured-projects";

function HomeContent() {
  const [blockchainDialogOpen, setBlockchainDialogOpen] = React.useState(false);
  const [frontendDialogOpen, setFrontendDialogOpen] = React.useState(false);
  const [solanaDialogOpen, setSolanaDialogOpen] = React.useState(false);
  const [certificationsDialogOpen, setCertificationsDialogOpen] =
    React.useState(false);

  return (
    <>
      <div className="min-h-screen p-4 sm:p-6 bg-black text-white">
        <Toaster position="top-center" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* contact */}
          <ContactSection />

          <Header />

          {/* work experience and achievements side by side */}
          <WorkExperienceSection />
          <Achievements />

          {/* featured projects from each category */}
          <FeaturedProjects />

          {/* footer */}
          <Footer />
        </div>

        {/* render ViewAllDialog components */}
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
