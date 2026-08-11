"use client";

import React, { useState } from "react";
import { Card } from "../../ui/card";
import { ArrowLeft, Maximize2, X, Smartphone, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// lightbox state type
interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

interface SeekerDetailsProps {
  onBack: () => void;
}

// seeker app type
interface SeekerApp {
  title: string;
  description: string;
  features: string[];
  screenshots: string[];
  status: "live" | "coming_soon";
  searchName: string; // name to search in dapp store
}

export function SeekerDetails({ onBack }: SeekerDetailsProps) {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    title: "",
  });

  const openLightbox = (src: string, title: string) => {
    setLightbox({ isOpen: true, src, title });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: "", title: "" });
  };

  const seekerApps: SeekerApp[] = [
    {
      title: "NearMe - Solana Mobile Payment dApp",
      description:
        "Google Maps for Solana. Discover nearby Solana merchants and pay them directly via mobile. Find crypto-friendly businesses around you and make fast payments with SOL or USDC.",
      features: [
        "Discover nearby merchants",
        "Pay with SOL or USDC",
        "Find crypto-friendly spots",
        "Fast mobile payments",
      ],
      screenshots: [
        "/images/nearme1.jpeg",
        "/images/nearme2.jpeg",
      ],
      status: "live",
      searchName: "NearMe",
    },
    {
      title: "OneSOL - Trading Terminal",
      description:
        "A powerful trading terminal for Solana Seeker. Swap USDC for popular tokens like SOL, BONK, and RAY. Earn spins with every trade to win exclusive NFTs and rewards.",
      features: [
        "Swap USDC to SOL, BONK, RAY",
        "Earn spins on every trade",
        "Win exclusive NFTs",
        "Low fees & fast execution",
      ],
      // onesol has not shipped, so there is nothing real to screenshot yet
      screenshots: [],
      status: "coming_soon",
      searchName: "OneSOL",
    },
  ];

  return (
    <>
      <Card className="bg-white border border-[#051A24]/10 p-4 sm:p-6">
        {/* header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 rounded-lg bg-[#051A24]/[0.04] hover:bg-[#051A24]/[0.09] text-[#051A24]/75 hover:text-[#051A24] transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#051A24] flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-serif text-3xl text-[#0D212C]">Solana Seeker Apps</h1>
                <p className="text-[#051A24]/65 text-sm">My apps on the Solana dApp Store</p>
              </div>
            </div>
          </div>
        </div>

        {/* seeker info banner */}
        <div className="bg-gradient-to-r from-white/[0.04] to-white/[0.04] border border-[#051A24]/15 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Image
              src="/images/solana.svg"
              alt="Solana"
              width={24}
              height={24}
              className="w-6 h-6 mt-0.5"
            />
            <div>
              <h3 className="font-semibold text-[#051A24] mb-1">What is Solana Seeker?</h3>
              <p className="text-[#051A24]/70 text-sm leading-relaxed">
                Solana Seeker is the next-generation Web3 mobile phone by Solana Mobile.
                It features a built-in Seed Vault wallet, the Solana dApp Store 2.0 with 100+ decentralized apps,
                and exclusive rewards through the Genesis Token and $SKR token ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* how to download info */}
        <div className="bg-[#051A24]/[0.04] border border-[#051A24]/10 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Search className="w-5 h-5 text-[#051A24]" />
            <h3 className="font-semibold text-[#051A24]">How to Download</h3>
          </div>
          <p className="text-[#051A24]/70 text-sm">
            These apps are available exclusively on the Solana dApp Store.
            Open the dApp Store on your Seeker phone and search for the app name to download.
          </p>
        </div>

        {/* apps list */}
        <div className="space-y-4">
          {seekerApps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#051A24]/[0.04] border border-[#051A24]/10 rounded-xl overflow-hidden p-4 sm:p-5"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                {/* left side - text content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-lg font-bold text-[#051A24]">{app.title}</h2>
                    {app.status === "live" ? (
                      <span className="px-2 py-0.5 bg-[#b9f24d] text-[#051A24] rounded text-xs font-medium">
                        Live
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded text-xs font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-[#051A24]/70 text-sm leading-relaxed mb-3">
                    {app.description}
                  </p>

                  {/* features */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {app.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#051A24]/[0.06] text-[#051A24]/70 rounded text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* search instruction */}
                  <div className="flex items-center gap-2 text-sm">
                    <Search className="w-4 h-4 text-[#051A24]/55" />
                    <span className="text-[#051A24]/55">Search:</span>
                    <code className="px-2 py-0.5 bg-[#051A24]/[0.06] text-[#051A24] rounded font-mono text-xs">
                      {app.searchName}
                    </code>
                  </div>
                </div>

                {/* right side - screenshots */}
                <div className="flex gap-2 sm:gap-3">
                  {app.screenshots.length === 0 && (
                    <div className="grid w-24 sm:w-28 aspect-[9/16] place-items-center rounded-lg border border-dashed border-[#051A24]/20 px-3 text-center text-xs text-[#051A24]/45">
                      Screens when it ships
                    </div>
                  )}
                  {app.screenshots.map((screenshot, i) => (
                    <div
                      key={i}
                      className="relative w-24 sm:w-28 aspect-[9/16] bg-white rounded-lg overflow-hidden cursor-pointer group border-2 border-[#051A24]/10 hover:border-[#051A24]/25 transition-colors"
                      onClick={() => openLightbox(screenshot, `${app.title} - Screenshot ${i + 1}`)}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                        <Maximize2 className="text-[#051A24] opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                      </div>
                      <Image
                        src={screenshot}
                        alt={`${app.title} screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            >
              <X size={28} />
            </button>

            <div className="absolute top-4 left-4 text-lg font-semibold text-white">
              {lightbox.title}
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[85vh] w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                width={400}
                height={800}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/50">
              Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
