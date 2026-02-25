"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { Github, Play, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileDemo {
  title: string;
  description: string;
  video: string;
  tags: string[];
  githubLink?: string;
  playStoreLink?: string;
}

// lightbox state
interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

export function Achievements() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    title: "",
  });

  const demos: MobileDemo[] = [
    {
      title: "Coupl App",
      description: "India's first neobank for couples with joint wallet & linked cards",
      video: "/videos/couple_demo.mp4",
      tags: ["React Native", "Fintech"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.couplapp",
    },
    {
      title: "SuiSage AI",
      description: "AI-powered Web3 portfolio assistant with voice responses",
      video: "/videos/suidemo.mp4",
      tags: ["React Native", "AI"],
      githubLink: "https://github.com/bluntbrain/SuiSage-AI-Powered-Web3-Portfolio-Assistant",
    },
    {
      title: "Location Chat",
      description: "Map-based real-time chat with nearby users via Mapbox",
      video: "/videos/locationdemo.mp4",
      tags: ["React Native", "Mapbox"],
      githubLink: "https://github.com/bluntbrain/react-native-messenger-library",
    },
    {
      title: "Swipable News",
      description: "Swipeable headlines with pinning, offline cache & auto-refresh",
      video: "/videos/newsdemo.mp4",
      tags: ["React Native", "News"],
      githubLink: "https://github.com/bluntbrain/swipeable-news-app",
    },
  ];

  const openLightbox = (src: string, title: string) => {
    setLightbox({ isOpen: true, src, title });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: "", title: "" });
  };

  return (
    <>
      <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-gh-900 border border-gh-700 p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-cyan-400">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-cyan-400">Mobile App Demos</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="bg-gh-800 rounded-xl border border-gh-700 hover:border-cyan-500/50 transition-all overflow-hidden group"
            >
              {/* video thumbnail */}
              <div
                className="relative cursor-pointer"
                onClick={() => openLightbox(demo.video, demo.title)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                  <Maximize2
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    size={22}
                  />
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-44 object-cover"
                >
                  <source src={demo.video} type="video/mp4" />
                </video>
              </div>

              {/* info */}
              <div className="p-2.5">
                <div className="flex flex-wrap gap-1 mb-1.5">
                  {demo.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-1.5 py-0.5 bg-gh-700 text-gh-200 rounded text-[10px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-sm text-cyan-400 mb-0.5 line-clamp-1">
                  {demo.title}
                </h3>
                <p className="text-gh-400 text-xs mb-2 line-clamp-2">
                  {demo.description}
                </p>
                <div className="flex gap-1.5">
                  {demo.githubLink && (
                    <a
                      href={demo.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-1 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-[10px] font-medium transition-colors"
                    >
                      <Github size={10} />
                      GitHub
                    </a>
                  )}
                  {demo.playStoreLink && (
                    <a
                      href={demo.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 rounded text-[10px] font-medium transition-colors"
                    >
                      <Play size={10} />
                      Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* video lightbox */}
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
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            >
              <X size={28} />
            </button>

            <div className="absolute top-4 left-4 text-white text-lg font-semibold">
              {lightbox.title}
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                autoPlay
                loop
                controls
                playsInline
                className="max-h-[85vh] w-auto rounded-lg"
              >
                <source src={lightbox.src} type="video/mp4" />
              </video>
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
