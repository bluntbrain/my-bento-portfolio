"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { ExternalLink, Github, ArrowRight, Play, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// project type definition
interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  playStoreLink?: string;
  screenshot?: string;
  videoDemo?: string;
  isVerticalVideo?: boolean;
}

// category type definition
interface Category {
  id: string;
  title: string;
  icon: string | null;
  iconComponent?: React.ReactNode;
  color: string;
  href: string;
  projects: Project[];
}

// lightbox state type
interface LightboxState {
  isOpen: boolean;
  type: "image" | "video" | null;
  src: string;
  title: string;
  isVertical?: boolean;
}

// featured projects section - showcases best projects from each category
export function FeaturedProjects() {
  // lightbox state for fullscreen media
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    type: null,
    src: "",
    title: "",
    isVertical: false,
  });

  // open lightbox with media
  const openLightbox = (type: "image" | "video", src: string, title: string, isVertical?: boolean) => {
    setLightbox({ isOpen: true, type, src, title, isVertical });
  };

  // close lightbox
  const closeLightbox = () => {
    setLightbox({ isOpen: false, type: null, src: "", title: "", isVertical: false });
  };

  // best projects from each category with images/videos
  const categories: Category[] = [
    {
      id: "solana",
      title: "Rust & Solana",
      icon: "/images/solana.svg",
      color: "text-primary",
      href: "/solana",
      projects: [
        {
          title: "Staking Contract",
          description: "SOL staking with points accumulation system built with Anchor framework. Secure deposits, withdrawals, and reward distribution.",
          tags: ["Anchor", "DeFi", "Rust"],
          githubLink: "https://github.com/bluntbrain/solana-projects",
        },
        {
          title: "AMM Protocol",
          description: "Automated market maker using Pinocchio framework with minimal compute units for gas-efficient trading.",
          tags: ["Pinocchio", "Advanced", "no_std"],
          githubLink: "https://github.com/bluntbrain/solana-projects",
        },
      ],
    },
    {
      id: "ethereum",
      title: "Solidity & EVM",
      icon: "/images/ethereum.svg",
      color: "text-accent",
      href: "/ethereum",
      projects: [
        {
          title: "Decentralized Stablecoin",
          description: "Multi-collateral stablecoin with 150% collateralization, Chainlink oracles, and automatic liquidations.",
          tags: ["DeFi", "Foundry", "Chainlink"],
          githubLink: "https://github.com/bluntbrain/stable-coin-foundry",
        },
        {
          title: "dx.fun",
          description: "Base chain dApp with token creation, live chat, and Dextools chart integration for real-time trading.",
          tags: ["Base Chain", "DeFi"],
          liveLink: "https://dx.fun",
        },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      icon: null,
      iconComponent: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      ),
      color: "text-cyan-400",
      href: "/mobile",
      projects: [
        {
          title: "Jar App",
          description: "Led Frontend team for savings app with 10M+ users. Improved performance by 60% and reduced deployment time by 70%.",
          tags: ["React Native", "Fintech", "10M+ Users"],
          playStoreLink: "https://play.google.com/store/apps/details?id=com.jar.app",
          screenshot: "/images/jardemo.png",
        },
        {
          title: "Coupl App",
          description: "India's first neobank for couples - acquired 10K+ users in 2 months. Joint wallet and linked cards for shared expenses.",
          tags: ["React Native", "Neobank", "10K+ Users"],
          playStoreLink: "https://play.google.com/store/apps/details?id=com.couplapp",
          videoDemo: "/videos/couple_demo.mp4",
          isVerticalVideo: true,
        },
        {
          title: "SuiSage - AI Portfolio Assistant",
          description: "AI-powered Web3 portfolio assistant that chains OpenAI and Gemini for superior analysis with voice responses.",
          tags: ["React Native", "AI", "Web3"],
          githubLink: "https://github.com/bluntbrain/SuiSage-AI-Powered-Web3-Portfolio-Assistant",
          videoDemo: "/videos/suidemo.mp4",
          isVerticalVideo: true,
        },
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: null,
      iconComponent: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
      color: "text-secondary",
      href: "/frontend",
      projects: [
        {
          title: "DxSale Launchpad",
          description: "DeFi platform powering 500+ token launches, generating $100K+ fees from $10M+ trading volume.",
          tags: ["Next.js", "DeFi", "$10M+ Volume"],
          liveLink: "https://dxsale.network",
          videoDemo: "/videos/dxfun_demo.mp4",
        },
        {
          title: "Movie Ballot App",
          description: "Real-time voting app with live results, built with Next.js and TypeScript for movie award voting.",
          tags: ["Next.js", "TypeScript"],
          githubLink: "https://github.com/bluntbrain/next-js-movie-ballot-app",
          liveLink: "https://next-js-movie-ballot-app.vercel.app/",
        },
      ],
    },
  ];

  return (
    <>
      <Card className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gh-900 border border-gh-700 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
        </div>

        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              {/* category header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {category.icon ? (
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  ) : (
                    <div className={category.color}>{category.iconComponent}</div>
                  )}
                  <h3 className={`font-bold text-lg ${category.color}`}>{category.title}</h3>
                </div>
                <Link
                  href={category.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                    ${category.id === "solana" ? "bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30" : ""}
                    ${category.id === "ethereum" ? "bg-accent/20 text-accent border border-accent/40 hover:bg-accent/30" : ""}
                    ${category.id === "mobile" ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/30" : ""}
                    ${category.id === "frontend" ? "bg-secondary/20 text-secondary border border-secondary/40 hover:bg-secondary/30" : ""}
                  `}
                >
                  View All Projects
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* projects grid - 3 columns for mobile apps with 3 projects */}
              <div className={`grid grid-cols-1 gap-4 ${
                category.projects.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}>
                {category.projects.map((project, projIndex) => (
                  <div
                    key={projIndex}
                    className="bg-gh-800 rounded-xl p-5 border border-gh-700 hover:border-gh-600 transition-colors"
                  >
                    {/* media section - image or video with click to fullscreen */}
                    {(project.screenshot || project.videoDemo) && (
                      <div
                        className={`mb-4 rounded-lg overflow-hidden bg-gh-700 cursor-pointer group relative ${
                          project.isVerticalVideo ? "flex justify-center" : ""
                        }`}
                        onClick={() => {
                          if (project.videoDemo) {
                            openLightbox("video", project.videoDemo, project.title, project.isVerticalVideo);
                          } else if (project.screenshot) {
                            openLightbox("image", project.screenshot, project.title);
                          }
                        }}
                      >
                        {/* fullscreen icon overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                          <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                        </div>

                        {project.videoDemo ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={project.isVerticalVideo
                              ? "h-48 w-auto object-contain"
                              : "w-full h-40 object-cover"
                            }
                          >
                            <source src={project.videoDemo} type="video/mp4" />
                          </video>
                        ) : project.screenshot ? (
                          <Image
                            src={project.screenshot}
                            alt={project.title}
                            width={400}
                            height={200}
                            className="w-full h-40 object-cover"
                          />
                        ) : null}
                      </div>
                    )}

                    {/* tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 bg-gh-700 text-gh-200 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* title and description */}
                    <h4 className={`font-bold text-lg mb-2 ${category.color}`}>
                      {project.title}
                    </h4>
                    <p className="text-gh-300 text-base mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* action buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg text-sm font-medium transition-colors"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-lg text-sm font-medium transition-colors"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.playStoreLink && (
                        <a
                          href={project.playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 rounded-lg text-sm font-medium transition-colors"
                        >
                          <Play size={16} />
                          Play Store
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* fullscreen lightbox modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            >
              <X size={28} />
            </button>

            {/* title */}
            <div className="absolute top-4 left-4 text-white text-lg font-semibold">
              {lightbox.title}
            </div>

            {/* media content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === "video" ? (
                <video
                  autoPlay
                  loop
                  controls
                  playsInline
                  className={lightbox.isVertical
                    ? "max-h-[85vh] w-auto rounded-lg"
                    : "max-w-full max-h-[85vh] rounded-lg"
                  }
                >
                  <source src={lightbox.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              )}
            </motion.div>

            {/* click anywhere to close hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
