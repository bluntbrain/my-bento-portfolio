// featured project cards for each category
"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import { ExternalLink, Github, ArrowRight, X, Maximize2 } from "lucide-react";
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
            aria-label="Close lightbox"
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <X size={28} aria-hidden="true" />
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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-0.5 bg-white/[0.06] text-gh-400 rounded-md text-xs font-medium">
      {children}
    </span>
  );
}

function ViewAllLink({ href, label = "View All" }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1.5 text-gh-400 hover:text-gh-200 text-sm font-medium transition-colors"
    >
      {label}
      <ArrowRight size={14} aria-hidden="true" />
    </Link>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-white/[0.1] transition-colors p-4">
      <div className="flex flex-wrap gap-1.5 mb-2">
        {project.tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </div>
      <h4 className="font-semibold text-sm text-white mb-1">{project.title}</h4>
      <p className="text-gh-500 text-sm mb-3 leading-relaxed">{project.description}</p>
      <div className="flex gap-2">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] text-gh-300 rounded-lg text-xs font-medium transition-colors"
          >
            <Github size={13} />
            GitHub
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] text-gh-300 rounded-lg text-xs font-medium transition-colors"
          >
            <ExternalLink size={13} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}

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
      <Card className="col-span-1 sm:col-span-2 lg:col-span-2 p-5 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gh-500 text-xs uppercase tracking-wider">Mobile Apps</h3>
          <ViewAllLink href="/mobile" />
        </div>

        <div className="grid grid-cols-2 gap-4 flex-1">
          {apps.map((app, index) => (
            <div key={index} className="flex flex-col min-h-0">
              <button
                type="button"
                aria-label={`Expand ${app.title} video`}
                className="relative bg-black rounded-xl overflow-hidden border border-white/[0.06] cursor-pointer group flex justify-center flex-1 w-full"
                onClick={() => openLightbox("video", app.videoDemo, app.title, true)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center z-10">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={app.videoDemo} type="video/mp4" />
                </video>
              </button>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium text-sm text-gh-300">{app.title}</span>
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gh-500 hover:text-gh-300 text-xs font-medium transition-colors"
                >
                  View →
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

export function JarAppCard() {
  return (
    <Card className="col-span-1 sm:col-span-2 p-5">
      <div className="flex items-center gap-3 mb-4">
        <Image
          src="/images/jarapp.png"
          alt="Jar App"
          width={36}
          height={36}
          className="rounded-xl"
        />
        <div>
          <h3 className="font-medium text-sm text-white">Jar App</h3>
          <p className="text-gh-500 text-xs">Feb 2022 – Feb 2023</p>
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.jar.app"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto p-2 bg-white/[0.06] hover:bg-white/[0.1] text-gh-400 rounded-xl transition-colors"
        >
          <ExternalLink size={14} />
        </a>
      </div>

      <p className="text-gh-400 text-sm leading-relaxed mb-3">
        Led the <span className="text-white font-medium">iOS app team of 8 engineers</span> at
        India&apos;s fastest-growing digital gold savings app.
      </p>

      <p className="text-gh-400 text-sm leading-relaxed mb-4">
        With <span className="text-white font-medium">10M+ users</span>, even a minor bug meant{" "}
        <span className="text-white font-medium">3,000+ support tickets within minutes</span>.
        Learned what it takes to ship reliable code at scale.
      </p>

      <div className="flex flex-wrap gap-2">
        <Tag>10M+ Users</Tag>
        <Tag>8 Engineers</Tag>
        <Tag>Production Scale</Tag>
      </div>
    </Card>
  );
}

export function SolanaProjectsCard() {
  const projects: Project[] = [
    {
      title: "Staking Contract",
      description:
        "SOL staking with points accumulation built with Anchor. Secure deposits, withdrawals, and reward distribution.",
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
    <Card className="col-span-1 sm:col-span-2 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <Image src="/images/solana.svg" alt="Solana" width={24} height={24} className="w-6 h-6" />
          <h3 className="font-medium text-sm text-white">Rust & Solana</h3>
        </div>
        <ViewAllLink href="/solana" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
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
    <Card className="col-span-1 sm:col-span-2 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <Image src="/images/ethereum.svg" alt="Ethereum" width={24} height={24} className="w-6 h-6" />
          <h3 className="font-medium text-sm text-white">Solidity & EVM</h3>
        </div>
        <ViewAllLink href="/ethereum" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
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
  ];

  return (
    <>
      <Card className="col-span-1 sm:col-span-2 lg:col-span-4 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Info */}
          <div className="flex flex-col justify-between py-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-medium text-gh-500 text-xs uppercase tracking-wider">Frontend</h3>
                <ViewAllLink href="/frontend" />
              </div>

              <h4 className="text-white text-lg font-semibold mb-3">DeFi Interfaces & Web Apps</h4>

              <p className="text-gh-400 text-sm leading-relaxed mb-4">
                Shipped the frontend for <span className="text-white font-medium">DxSale</span> — a DeFi
                launchpad powering <span className="text-white font-medium">500+ token launches</span> with{" "}
                <span className="text-white font-medium">$10M+</span> in volume. Integrated wallet
                flows with Ethers.js and grew organic traffic{" "}
                <span className="text-white font-medium">3x</span> through SEO.
              </p>

              <p className="text-gh-500 text-sm leading-relaxed mb-5">
                Previously built real-time explorers and multi-chain dashboards at Krane Apps & Glitter Finance.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {["Next.js", "React", "TypeScript", "TailwindCSS", "Ethers.js", "Redux", "GraphQL"].map((skill) => (
                <span key={skill} className="px-2.5 py-1 bg-white/[0.06] text-gh-400 rounded-lg text-xs font-medium">{skill}</span>
              ))}
            </div>
          </div>

          {/* Project card */}
          {projects.map((project, index) => (
            <div key={index} className="bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-white/[0.1] transition-colors overflow-hidden flex flex-col">
              {project.videoDemo && (
                <button
                  type="button"
                  aria-label={`Expand ${project.title} video`}
                  className="relative bg-black cursor-pointer group w-full"
                  onClick={() => openLightbox("video", project.videoDemo!, project.title)}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                  </div>
                  <video autoPlay loop muted playsInline className="w-full h-48 object-cover">
                    <source src={project.videoDemo} type="video/mp4" />
                  </video>
                </button>
              )}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </div>
                <h4 className="font-medium text-sm text-white mb-1">{project.title}</h4>
                <p className="text-gh-400 text-sm mb-3 leading-relaxed">{project.description}</p>
                <div className="flex gap-2 mt-auto">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] text-gh-300 rounded-lg text-xs font-medium transition-colors"
                    >
                      <ExternalLink size={13} />
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
