"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { ParticlesBackground } from "@/components/ui/particles-background";

export default function PrivacyPolicyPage() {
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
                  <Shield className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
                  <p className="text-gh-400 text-sm">OneSOL - Trading Terminal</p>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                <strong>Effective Date:</strong> January 2, 2025
              </p>

              <p className="text-gray-300 mb-6">
                OneSOL (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information
                when you use our mobile application.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Information We Collect</h2>

              <h3 className="text-lg font-medium text-white mt-6 mb-3">Wallet Information</h3>
              <p className="text-gray-300 mb-4">
                When you connect your wallet to OneSOL, we access your public wallet address
                to display your token balances and NFT holdings. We do not have access to your
                private keys or seed phrases. All transaction signing happens securely through
                the Solana Mobile Wallet Adapter.
              </p>

              <h3 className="text-lg font-medium text-white mt-6 mb-3">Local Storage</h3>
              <p className="text-gray-300 mb-4">
                We store the following data locally on your device:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Connected wallet address (for session persistence)</li>
                <li>Spin rewards count and points</li>
                <li>App preferences and settings</li>
              </ul>
              <p className="text-gray-300 mb-4">
                This data is stored using AsyncStorage and remains on your device. It is not
                transmitted to any external servers.
              </p>

              <h3 className="text-lg font-medium text-white mt-6 mb-3">Blockchain Data</h3>
              <p className="text-gray-300 mb-4">
                We read publicly available blockchain data to display:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Token balances and holdings</li>
                <li>NFT ownership and metadata</li>
                <li>Transaction history</li>
                <li>Token prices and market data</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Third-Party Services</h2>
              <p className="text-gray-300 mb-4">
                OneSOL uses the following third-party services:
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>Helius</strong> - RPC provider for Solana blockchain access</li>
                <li><strong>Birdeye</strong> - Token price and market data</li>
                <li><strong>Jupiter</strong> - Token swap routing and execution</li>
                <li><strong>Pinata/IPFS</strong> - NFT metadata and image hosting</li>
              </ul>

              <p className="text-gray-300 mb-4">
                These services may collect usage data according to their own privacy policies.
                We encourage you to review their respective privacy policies.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Information We Do NOT Collect</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Private keys or seed phrases</li>
                <li>Personal identification information (name, email, phone)</li>
                <li>Location data</li>
                <li>Device identifiers or advertising IDs</li>
                <li>Usage analytics or behavioral data</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement the following security measures:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>All wallet operations use the secure Solana Mobile Wallet Adapter</li>
                <li>No sensitive data is transmitted to external servers</li>
                <li>Local data is stored using standard mobile security practices</li>
                <li>API keys are stored as environment variables, not in source code</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Disconnect your wallet at any time</li>
                <li>Clear local app data through your device settings</li>
                <li>Uninstall the application to remove all local data</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-300 mb-4">
                OneSOL is not intended for use by children under 18. We do not knowingly
                collect information from children.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Changes to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be
                reflected with an updated effective date at the top of this page.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about this Privacy Policy, please contact us at{" "}
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
