"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { SeekerDetails } from "@/components/sections/tech-details/seeker-details";
import { useRouter } from "next/navigation";
import { ParticlesBackground } from "@/components/ui/particles-background";

export default function SeekerPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <>
      <ParticlesBackground />
      <div className="min-h-screen p-4 sm:p-6 text-white relative" style={{ zIndex: 1 }}>
        <Toaster position="top-center" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* contact */}
          <ContactSection />

          {/* seeker apps content */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <SeekerDetails onBack={handleBack} />
          </div>

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
