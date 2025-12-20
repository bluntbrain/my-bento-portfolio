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

// lightbox state type
interface LightboxState {
  isOpen: boolean;
  type: "image" | "video" | null;
  src: string;
  title: string;
  isVertical?: boolean;
}

// shared lightbox component
function MediaLightbox({
  lightbox,
  onClose,
}: {
  lightbox: LightboxState;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {lightbox.isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
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
            {lightbox.type === "video" ? (
              <video
                autoPlay
                loop
                controls
                playsInline
                className={
                  lightbox.isVertical
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

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            Click anywhere to close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// mobile apps card component
export function MobileAppsCard() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    type: null,
    src: "",
    title: "",
    isVertical: false,
  });

  const openLightbox = (
    type: "image" | "video",
    src: string,
    title: string,
    isVertical?: boolean
  ) => {
    setLightbox({ isOpen: true, type, src, title, isVertical });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, type: null, src: "", title: "", isVertical: false });
  };

  const projects: Project[] = [
    {
      title: "Jar App",
      description:
        "Led Frontend team for savings app with 10M+ users. Improved performance by 60% and reduced deployment time by 70%.",
      tags: ["React Native", "Fintech", "10M+ Users"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.jar.app",
      screenshot: "/images/jardemo.png",
    },
    {
      title: "Coupl App",
      description:
        "India's first neobank for couples - acquired 10K+ users in 2 months. Joint wallet and linked cards for shared expenses.",
      tags: ["React Native", "Neobank", "10K+ Users"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.couplapp",
      videoDemo: "/videos/couple_demo.mp4",
      isVerticalVideo: true,
    },
    {
      title: "SuiSage - AI Portfolio Assistant",
      description:
        "AI-powered Web3 portfolio assistant that chains OpenAI and Gemini for superior analysis with voice responses.",
      tags: ["React Native", "AI", "Web3"],
      githubLink:
        "https://github.com/bluntbrain/SuiSage-AI-Powered-Web3-Portfolio-Assistant",
      videoDemo: "/videos/suidemo.mp4",
      isVerticalVideo: true,
    },
  ];

  return (
    <>
      <Card className="col-span-1 sm:col-span-2 bg-gh-900 border border-gh-700 p-4 sm:p-5">
        {/* header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-cyan-400">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-cyan-400">Mobile Apps</h3>
          </div>
          <Link
            href="/mobile"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/30"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gh-800 rounded-xl border border-gh-700 hover:border-gh-600 transition-colors overflow-hidden"
            >
              {/* media */}
              {(project.screenshot || project.videoDemo) && (
                <div
                  className="relative bg-gh-900 cursor-pointer group flex justify-center py-3"
                  onClick={() => {
                    if (project.videoDemo) {
                      openLightbox("video", project.videoDemo, project.title, project.isVerticalVideo);
                    } else if (project.screenshot) {
                      openLightbox("image", project.screenshot, project.title);
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                  </div>
                  <div className="relative rounded-xl overflow-hidden border-2 border-gh-600 shadow-lg">
                    {project.videoDemo ? (
                      <video autoPlay loop muted playsInline className="h-36 w-auto object-cover">
                        <source src={project.videoDemo} type="video/mp4" />
                      </video>
                    ) : project.screenshot ? (
                      <Image
                        src={project.screenshot}
                        alt={project.title}
                        width={150}
                        height={300}
                        className="h-36 w-auto object-cover"
                      />
                    ) : null}
                  </div>
                </div>
              )}

              {/* content */}
              <div className="p-3">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gh-700 text-gh-200 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-bold text-base text-cyan-400 mb-1 line-clamp-1">{project.title}</h4>
                <p className="text-gh-300 text-sm mb-2 line-clamp-2">{project.description}</p>
                <div className="flex gap-1.5">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs font-medium transition-colors"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 rounded text-xs font-medium transition-colors"
                    >
                      <Play size={14} />
                      Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <MediaLightbox lightbox={lightbox} onClose={closeLightbox} />
    </>
  );
}

// rust & solana card component
export function SolanaProjectsCard() {
  const projects: Project[] = [
    {
      title: "Staking Contract",
      description:
        "SOL staking with points accumulation system built with Anchor framework. Secure deposits, withdrawals, and reward distribution.",
      tags: ["Anchor", "DeFi", "Rust"],
      githubLink: "https://github.com/bluntbrain/solana-projects",
    },
    {
      title: "AMM Protocol",
      description:
        "Automated market maker using Pinocchio framework with minimal compute units for gas-efficient trading.",
      tags: ["Pinocchio", "Advanced", "no_std"],
      githubLink: "https://github.com/bluntbrain/solana-projects",
    },
  ];

  return (
    <Card className="col-span-1 sm:col-span-2 bg-gh-900 border border-gh-700 p-4 sm:p-5">
      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image src="/images/solana.svg" alt="Solana" width={28} height={28} className="w-7 h-7" />
          <h3 className="font-bold text-xl text-primary">Rust & Solana</h3>
        </div>
        <Link
          href="/solana"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30"
        >
          View All
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gh-800 rounded-xl border border-gh-700 hover:border-gh-600 transition-colors overflow-hidden p-4">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 bg-gh-700 text-gh-200 rounded text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="font-bold text-base text-primary mb-1">{project.title}</h4>
            <p className="text-gh-300 text-sm mb-3">{project.description}</p>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs font-medium transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

// solidity & evm card component
export function EthereumProjectsCard() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    type: null,
    src: "",
    title: "",
    isVertical: false,
  });

  const closeLightbox = () => {
    setLightbox({ isOpen: false, type: null, src: "", title: "", isVertical: false });
  };

  const projects: Project[] = [
    {
      title: "Decentralized Stablecoin",
      description:
        "Multi-collateral stablecoin with 150% collateralization, Chainlink oracles, and automatic liquidations.",
      tags: ["DeFi", "Foundry", "Chainlink"],
      githubLink: "https://github.com/bluntbrain/stable-coin-foundry",
    },
    {
      title: "dx.fun",
      description:
        "Base chain dApp with token creation, live chat, and Dextools chart integration for real-time trading.",
      tags: ["Base Chain", "DeFi"],
      liveLink: "https://dx.fun",
    },
  ];

  return (
    <>
      <Card className="col-span-1 sm:col-span-2 bg-gh-900 border border-gh-700 p-4 sm:p-5">
        {/* header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image src="/images/ethereum.svg" alt="Ethereum" width={28} height={28} className="w-7 h-7" />
            <h3 className="font-bold text-xl text-accent">Solidity & EVM</h3>
          </div>
          <Link
            href="/ethereum"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all bg-accent/20 text-accent border border-accent/40 hover:bg-accent/30"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gh-800 rounded-xl border border-gh-700 hover:border-gh-600 transition-colors overflow-hidden p-4">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 bg-gh-700 text-gh-200 rounded text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="font-bold text-base text-accent mb-1">{project.title}</h4>
              <p className="text-gh-300 text-sm mb-3">{project.description}</p>
              <div className="flex gap-1.5">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs font-medium transition-colors"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/20 hover:bg-accent/30 text-accent border border-accent/30 rounded text-xs font-medium transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
      <MediaLightbox lightbox={lightbox} onClose={closeLightbox} />
    </>
  );
}

// frontend card component
export function FrontendProjectsCard() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    type: null,
    src: "",
    title: "",
    isVertical: false,
  });

  const openLightbox = (
    type: "image" | "video",
    src: string,
    title: string,
    isVertical?: boolean
  ) => {
    setLightbox({ isOpen: true, type, src, title, isVertical });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, type: null, src: "", title: "", isVertical: false });
  };

  const projects: Project[] = [
    {
      title: "DxSale Launchpad",
      description:
        "DeFi platform powering 500+ token launches, generating $100K+ fees from $10M+ trading volume.",
      tags: ["Next.js", "DeFi", "$10M+ Volume"],
      liveLink: "https://dxsale.network",
      videoDemo: "/videos/dxfun_demo.mp4",
    },
    {
      title: "Movie Ballot App",
      description:
        "Real-time voting app with live results, built with Next.js and TypeScript for movie award voting.",
      tags: ["Next.js", "TypeScript"],
      githubLink: "https://github.com/bluntbrain/next-js-movie-ballot-app",
      liveLink: "https://next-js-movie-ballot-app.vercel.app/",
    },
  ];

  return (
    <>
      <Card className="col-span-1 sm:col-span-2 bg-gh-900 border border-gh-700 p-4 sm:p-5">
        {/* header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-secondary">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-secondary">Frontend</h3>
          </div>
          <Link
            href="/frontend"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all bg-secondary/20 text-secondary border border-secondary/40 hover:bg-secondary/30"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gh-800 rounded-xl border border-gh-700 hover:border-gh-600 transition-colors overflow-hidden">
              {/* media */}
              {project.videoDemo && (
                <div
                  className="relative bg-gh-900 cursor-pointer group"
                  onClick={() => openLightbox("video", project.videoDemo!, project.title)}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                  </div>
                  <video autoPlay loop muted playsInline className="w-full h-28 object-cover">
                    <source src={project.videoDemo} type="video/mp4" />
                  </video>
                </div>
              )}

              {/* content */}
              <div className="p-3">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gh-700 text-gh-200 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-bold text-base text-secondary mb-1">{project.title}</h4>
                <p className="text-gh-300 text-sm mb-2 line-clamp-2">{project.description}</p>
                <div className="flex gap-1.5">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded text-xs font-medium transition-colors"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/30 rounded text-xs font-medium transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <MediaLightbox lightbox={lightbox} onClose={closeLightbox} />
    </>
  );
}

// legacy export for backwards compatibility
export function FeaturedProjects() {
  return (
    <>
      <MobileAppsCard />
      <SolanaProjectsCard />
      <EthereumProjectsCard />
      <FrontendProjectsCard />
    </>
  );
}
