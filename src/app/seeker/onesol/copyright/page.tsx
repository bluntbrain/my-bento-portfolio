"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Copyright } from "lucide-react";
import { useRouter } from "next/navigation";
import { ParticlesBackground } from "@/components/ui/particles-background";

export default function CopyrightPage() {
  const router = useRouter();

  return (
    <>
      <ParticlesBackground />
      <div className="min-h-screen p-4 sm:p-6 text-white relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gh-900 border border-gh-700 p-6 sm:p-8">
            {/* header */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => router.push("/seeker")}
                className="p-2 rounded-lg bg-gh-800 hover:bg-gh-700 text-gh-300 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <Copyright className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Copyright Notice</h1>
                  <p className="text-gh-400 text-sm">OneSOL - Trading Terminal</p>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Effective Date:</strong> January 2, 2025
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Ownership</h2>
              <p className="text-gray-300 mb-4">
                Copyright 2025 OneSOL. All rights reserved.
              </p>

              <p className="text-gray-300 mb-4">
                OneSOL is developed and maintained by Ishan Lakhwani. The application,
                including its source code, design, user interface, graphics, and all
                associated intellectual property, is owned by the developer unless
                otherwise specified.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Application Content</h2>
              <p className="text-gray-300 mb-4">
                The following elements are proprietary to OneSOL:
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>OneSOL name, logo, and branding</li>
                <li>Application user interface and design</li>
                <li>NFT artwork and collectible designs</li>
                <li>Original source code and algorithms</li>
                <li>Documentation and instructional content</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Third-Party Content</h2>
              <p className="text-gray-300 mb-4">
                OneSOL integrates with third-party services and displays content that
                remains the property of their respective owners:
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Token logos and metadata</strong> - Property of respective token projects</li>
                <li><strong>Price data</strong> - Provided by Birdeye API</li>
                <li><strong>Blockchain data</strong> - From the Solana network</li>
                <li><strong>Wallet assets</strong> - Owned by individual wallet holders</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">NFT Ownership</h2>
              <p className="text-gray-300 mb-4">
                NFTs minted through OneSOL are owned by the wallet holder who mints them.
                The NFT artwork is created exclusively for OneSOL and distributed as
                rewards to users. Upon minting, ownership of the NFT transfers to the
                user&apos;s wallet address.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Open Source Components</h2>
              <p className="text-gray-300 mb-4">
                OneSOL is built using open source libraries and frameworks. These
                components retain their original licenses and copyrights. See the
                License page for details on third-party licenses.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Legal Compliance</h2>
              <p className="text-gray-300 mb-4">
                This application is provided for educational and utility purposes.
                Users are responsible for ensuring their use of the application
                complies with applicable laws in their jurisdiction.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Contact</h2>
              <p className="text-gray-300">
                For copyright inquiries or to report infringement, please contact{" "}
                <a href="mailto:ishan.lakhwani@gmail.com" className="text-primary hover:underline">
                  ishan.lakhwani@gmail.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
