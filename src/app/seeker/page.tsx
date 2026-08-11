"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { SeekerDetails } from "@/components/sections/tech-details/seeker-details";
import { useRouter } from "next/navigation";

export default function SeekerPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <>
      <div className="ink min-h-screen">
        <Toaster position="top-center" />
        <div>
          {/* contact */}
          <ContactSection />

          {/* seeker apps content */}
          <div className="mx-auto max-w-[1200px] px-6">
            <SeekerDetails onBack={handleBack} />
          </div>

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
