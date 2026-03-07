// featured project cards for each category - unified monochrome + blue accent theme
"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { ExternalLink, Github, ArrowRight, Play, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

interface LightboxState {
  isOpen: boolean;
  type: "image" | "video" | null;
  src: string;
  title: string;
  isVertical?: boolean;
}

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
                    ? "max-h-[85vh] w-auto rounded-2xl"
                    : "max-w-full max-h-[85vh] rounded-2xl"
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
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
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

// mobile apps card - two big autoplaying portrait videos side by side
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

  const apps = [
    {
      title: "Coupl App",
      videoDemo: "/videos/couple_demo.mp4",
      link: "https://play.google.com/store/apps/details?id=com.couplapp",
    },
    {
      title: "SuiSage",
      videoDemo: "/videos/suidemo.mp4",
      link: "https://github.com/bluntbrain/SuiSage-AI-Powered-Web3-Portfolio-Assistant",
    },
  ];

  return (
    <>
      <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-gh-900 border border-gh-700 p-4 sm:p-5 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg text-white">Mobile Apps I Built</h3>
          <Link
            href="/mobile"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 flex-1">
          {apps.map((app, index) => (
            <div key={index} className="flex flex-col min-h-0">
              <div
                className="relative bg-gh-950 rounded-2xl overflow-hidden border border-gh-700 cursor-pointer group flex justify-center flex-1"
                onClick={() => openLightbox("video", app.videoDemo, app.title, true)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center z-10">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={app.videoDemo} type="video/mp4" />
                </video>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-semibold text-sm text-white">{app.title}</span>
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary text-xs font-medium underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  View
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <MediaLightbox lightbox={lightbox} onClose={closeLightbox} />
    </>
  );
}

// jar app - production scale experience story card
export function JarAppCard() {
  return (
    <Card className="col-span-1 sm:col-span-2 bg-gh-900 border border-gh-700 p-4 sm:p-5">
      <div className="flex items-center gap-3 mb-4">
        <Image
          src="/images/jarapp.png"
          alt="Jar App"
          width={40}
          height={40}
          className="rounded-xl"
        />
        <div>
          <h3 className="font-bold text-lg text-white">Jar App</h3>
          <p className="text-gh-400 text-xs">Feb 2022 - Feb 2023</p>
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.jar.app"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto p-1.5 bg-gh-700 hover:bg-gh-600 text-white rounded-xl transition-colors"
        >
          <Play size={14} />
        </a>
      </div>

      <p className="text-gh-200 text-sm leading-relaxed mb-3">
        Led the <span className="text-white font-medium">iOS app team of 8 engineers</span> at
        India&apos;s fastest-growing digital gold savings app.
        Built with <span className="text-white font-medium">TypeScript</span>,{" "}
        <span className="text-white font-medium">React Native</span>, and{" "}
        <span className="text-white font-medium">Swift</span>.
      </p>

      <p className="text-gh-200 text-sm leading-relaxed mb-4">
        With <span className="text-white font-semibold">10M+ users</span>, even a minor bug meant{" "}
        <span className="text-white font-semibold">3,000+ support tickets within minutes</span>.
        The customer support team would escalate directly to me to resolve production
        issues fast. I learned what it takes to ship reliable code at scale and keep
        millions of users unaffected.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="px-2.5 py-1 bg-gh-800 border border-gh-600 rounded-full text-xs text-gh-200">10M+ Users</span>
        <span className="px-2.5 py-1 bg-gh-800 border border-gh-600 rounded-full text-xs text-gh-200">8 Engineers</span>
        <span className="px-2.5 py-1 bg-gh-800 border border-gh-600 rounded-full text-xs text-gh-200">Production Scale</span>
      </div>
    </Card>
  );
}

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
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image src="/images/solana.svg" alt="Solana" width={28} height={28} className="w-7 h-7" />
          <h3 className="font-bold text-xl text-white">Rust & Solana</h3>
        </div>
        <Link
          href="/solana"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
        >
          View All
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gh-800 rounded-2xl border border-gh-700 hover:border-gh-600 transition-colors overflow-hidden p-4">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 bg-gh-700 text-gh-200 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="font-bold text-base text-white mb-1">{project.title}</h4>
            <p className="text-gh-300 text-sm mb-3">{project.description}</p>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gh-700 hover:bg-gh-600 text-white rounded-full text-xs font-medium transition-colors"
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

export function EthereumProjectsCard() {
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
    <Card className="col-span-1 sm:col-span-2 bg-gh-900 border border-gh-700 p-4 sm:p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image src="/images/ethereum.svg" alt="Ethereum" width={28} height={28} className="w-7 h-7" />
          <h3 className="font-bold text-xl text-white">Solidity & EVM</h3>
        </div>
        <Link
          href="/ethereum"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
        >
          View All
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gh-800 rounded-2xl border border-gh-700 hover:border-gh-600 transition-colors overflow-hidden p-4">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 bg-gh-700 text-gh-200 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="font-bold text-base text-white mb-1">{project.title}</h4>
            <p className="text-gh-300 text-sm mb-3">{project.description}</p>
            <div className="flex gap-1.5">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gh-700 hover:bg-gh-600 text-white rounded-full text-xs font-medium transition-colors"
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-medium transition-colors"
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
  );
}

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
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-white">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-white">Frontend</h3>
          </div>
          <Link
            href="/frontend"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gh-800 rounded-2xl border border-gh-700 hover:border-gh-600 transition-colors overflow-hidden">
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

              <div className="p-3">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gh-700 text-gh-200 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-bold text-base text-white mb-1">{project.title}</h4>
                <p className="text-gh-300 text-sm mb-2 line-clamp-2">{project.description}</p>
                <div className="flex gap-1.5">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gh-700 hover:bg-gh-600 text-white rounded-full text-xs font-medium transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-medium transition-colors"
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
