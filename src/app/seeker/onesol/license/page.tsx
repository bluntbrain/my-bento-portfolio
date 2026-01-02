"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Scale } from "lucide-react";
import { useRouter } from "next/navigation";
import { ParticlesBackground } from "@/components/ui/particles-background";

export default function LicensePage() {
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
                  <Scale className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">License</h1>
                  <p className="text-gh-400 text-sm">OneSOL - Trading Terminal</p>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Effective Date:</strong> January 2, 2025
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">MIT License</h2>
              <p className="text-gray-300 mb-4">
                Copyright (c) 2025 OneSOL
              </p>

              <p className="text-gray-300 mb-4">
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the &quot;Software&quot;), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
              </p>

              <p className="text-gray-300 mb-4">
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
              </p>

              <p className="text-gray-300 mb-4 uppercase text-sm">
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Third-Party Licenses</h2>
              <p className="text-gray-300 mb-4">
                OneSOL uses the following third-party services and libraries:
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Jupiter Aggregator</strong> - Token swap routing and execution</li>
                <li><strong>Helius</strong> - Solana RPC and DAS API services</li>
                <li><strong>Birdeye</strong> - Real-time token price data</li>
                <li><strong>Metaplex</strong> - NFT minting infrastructure</li>
                <li><strong>Solana Mobile Wallet Adapter</strong> - Mobile wallet integration</li>
              </ul>

              <p className="text-gray-300">
                Each third-party service is subject to its own terms of service and licensing agreements.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Contact</h2>
              <p className="text-gray-300">
                For licensing inquiries, please contact us at{" "}
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
