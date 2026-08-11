"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { SolidityEvmDetails } from "@/components/sections/tech-details/solidity-evm-details";
import { useRouter } from "next/navigation";

export default function EthereumPage() {
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

        {/* ethereum/solidity details content */}
        <div className="mx-auto max-w-[1200px] px-6">
          <SolidityEvmDetails onBack={handleBack} />
        </div>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
