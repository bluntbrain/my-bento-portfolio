// nearme viral app showcase
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

  const stats = [
    { icon: Download, label: "20K+", },
    { icon: Star, label: "4.2", },
    { icon: MessageSquare, label: "1.1K+", },
    { icon: Store, label: "10K+", },
  ];

  return (
    <>
      <Card className="col-span-1 sm:col-span-2 p-0 overflow-hidden">
        <div className="flex flex-col sm:flex-row h-full sm:min-h-[280px]">
          <div className="flex-1 p-5 flex flex-col justify-between">
            <p className="text-gh-400 text-sm leading-relaxed mb-4">
              Built and published{" "}
              <span className="text-white font-medium">NearMe App</span> on{" "}
              <span className="text-white font-medium">Solana Seeker</span>{" "}
              in <span className="text-white font-medium">2 days</span> — went{" "}
              <span className="text-white font-medium">viral</span>.
              Scraped{" "}
              <span className="text-white font-medium">10K+ merchants</span>{" "}
              accepting SOL worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] rounded-lg">
                  <stat.icon className="w-3.5 h-3.5 text-gh-500" />
                  <span className="text-gh-300 text-xs font-medium">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <p className="text-gh-500 text-xs">
                All <span className="text-white">.skr</span> reviews from Seeker owners
              </p>
              <Link
                href="/seeker"
                className="inline-flex items-center gap-1 text-gh-400 hover:text-gh-200 text-xs font-medium transition-colors"
              >
                All Apps
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="flex justify-center gap-3 p-3 sm:h-full sm:min-h-[280px] sm:self-stretch">
            <button
              type="button"
              aria-label="View NearMe App Store listing"
              className="relative w-28 h-48 sm:w-44 sm:h-full sm:min-h-[260px] rounded-xl overflow-hidden border border-white/[0.06] cursor-pointer group"
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
                <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
            <button
              type="button"
              aria-label="View NearMe App reviews"
              className="relative w-28 h-48 sm:w-44 sm:h-full sm:min-h-[260px] rounded-xl overflow-hidden border border-white/[0.06] cursor-pointer group"
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
                <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          </div>
        </div>
      </Card>

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
              aria-label="Close lightbox"
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" aria-hidden="true" />
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
              className="relative max-h-[85vh] max-w-[400px] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl"
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
