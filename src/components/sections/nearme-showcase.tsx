"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import {
  Download,
  Star,
  MessageSquare,
  Store,
  Maximize2,
  X,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// lightbox state type
interface LightboxState {
  isOpen: boolean;
  src: string;
  alt: string;
}

export function NearMeShowcase() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    alt: "",
  });

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ isOpen: true, src, alt });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: "", alt: "" });
  };

  return (
    <>
      <Card className="col-span-1 sm:col-span-2 bg-gh-900 border border-gh-700 p-0 overflow-hidden">
        {/* mobile: vertical stack, desktop: horizontal */}
        <div className="flex flex-col sm:flex-row h-full sm:min-h-[280px]">
          {/* text content */}
          <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
            {/* description */}
            <p className="text-gh-200 text-base leading-relaxed mb-3">
              Built and published{" "}
              <span className="text-[#14F195] font-medium">NearMe App</span> on{" "}
              <span className="text-[#9945FF] font-medium">Solana Seeker</span>{" "}
              in <span className="text-white font-semibold">2 days</span> - went{" "}
              <span className="text-yellow-500 font-medium">viral</span>.
              Scraped{" "}
              <span className="text-white font-medium">10K+ merchants</span>{" "}
              accepting SOL worldwide.
            </p>

            {/* stats badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#14F195]/10 border border-[#14F195]/30 rounded-full">
                <Download className="w-4 h-4 text-[#14F195]" />
                <span className="text-[#14F195] text-sm font-semibold">
                  20K+
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">
                  4.2
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#9945FF]/10 border border-[#9945FF]/30 rounded-full">
                <MessageSquare className="w-4 h-4 text-[#9945FF]" />
                <span className="text-[#9945FF] text-sm font-semibold">
                  1.1K+
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gh-800 border border-gh-600 rounded-full">
                <Store className="w-4 h-4 text-gh-300" />
                <span className="text-white text-sm font-semibold">10K+</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <p className="text-gh-400 text-sm">
                All <span className="text-[#58a6ff]">.skr</span> reviews from Seeker owners
              </p>
              <Link
                href="/seeker"
                className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
              >
                All Apps
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* images - horizontal on mobile, vertical side panel on desktop */}
          <div className="flex justify-center gap-3  p-3 sm:h-full sm:min-h-[280px] sm:self-stretch">
            <div
              className="relative w-28 h-48 sm:w-44 sm:h-full sm:min-h-[260px] rounded-xl overflow-hidden border-2 border-gh-600 cursor-pointer group"
              onClick={() =>
                openLightbox("/images/nearme1.jpeg", "NearMe App Store listing")
              }
            >
              <Image
                src="/images/nearme1.jpeg"
                alt="NearMe App"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div
              className="relative w-28 h-48 sm:w-44 sm:h-full sm:min-h-[260px] rounded-xl overflow-hidden border-2 border-gh-600 cursor-pointer group"
              onClick={() =>
                openLightbox("/images/nearme2.jpeg", "NearMe App reviews")
              }
            >
              <Image
                src="/images/nearme2.jpeg"
                alt="NearMe Reviews"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* lightbox modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 bg-gh-800/80 hover:bg-gh-700 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="absolute top-4 left-4 z-50">
              <h3 className="text-white text-lg font-semibold">
                {lightbox.alt}
              </h3>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[85vh] max-w-[400px] rounded-3xl overflow-hidden border-4 border-gh-600 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={400}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
