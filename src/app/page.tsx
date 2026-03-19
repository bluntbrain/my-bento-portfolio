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
import { MobileAppsCard, JarAppCard, SolanaProjectsCard, EthereumProjectsCard, FrontendProjectsCard } from "@/components/sections/featured-projects";
import { OpenSourceContribution } from "@/components/sections/opensource-contribution";
import { NearMeShowcase } from "@/components/sections/nearme-showcase";

function HomeContent() {
  const [blockchainDialogOpen, setBlockchainDialogOpen] = React.useState(false);
  const [frontendDialogOpen, setFrontendDialogOpen] = React.useState(false);
  const [solanaDialogOpen, setSolanaDialogOpen] = React.useState(false);
  const [certificationsDialogOpen, setCertificationsDialogOpen] =
    React.useState(false);

  return (
    <>
      <div className="min-h-screen p-4 sm:p-6 text-white relative">
        <Toaster position="top-center" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <ContactSection />

          <Header />

          {/* work experience + open source stacked left, mobile apps right */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-4 sm:gap-6">
            <WorkExperienceSection />
            <OpenSourceContribution />
          </div>
          <MobileAppsCard />

          {/* app stories */}
          <JarAppCard />
          <NearMeShowcase />

          {/* web3 projects side by side */}
          <SolanaProjectsCard />
          <EthereumProjectsCard />

          {/* frontend */}
          <FrontendProjectsCard />

          {/* hackathon wins */}
          <Achievements />

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
