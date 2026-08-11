"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { MobileDetails } from "@/components/sections/tech-details/mobile-details";
import { useRouter } from "next/navigation";

export default function MobilePage() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="ink min-h-screen">
      <Toaster position="top-center" />
      <div>
        {/* contact */}
        <ContactSection />

        {/* mobile details content */}
        <div className="mx-auto max-w-[1200px] px-6">
          <MobileDetails onBack={handleBack} />
        </div>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
