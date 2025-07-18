"use client";

import React from "react";
import { Card } from "../../ui/card";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface RustSolanaDetailsProps {
  onBack: () => void;
}

export function RustSolanaDetails({ onBack }: RustSolanaDetailsProps) {
  const rustProjects = [
    {
      title: "Rust CLI Task Manager",
      description: "Command-line task manager with SQLite storage. Features task creation, deletion, and status updates. Demonstrates Rust's ownership system and error handling.",
      tags: ["Rust", "CLI", "SQLite"],
      githubLink: "https://github.com/bluntbrain/rust-task-manager",
      techStack: ["Rust", "SQLite", "Clap", "Serde"],
    },
    {
      title: "Rust Image Processing WASM",
      description: "WebAssembly-powered image processing library with high-performance filters and transformations. Showcases zero-cost abstractions and seamless WASM integration.",
      tags: ["Rust", "WebAssembly", "Image Processing"],
      githubLink: "https://github.com/bluntbrain/rust-wasm-image",
      techStack: ["Rust", "WebAssembly", "wasm-pack", "Canvas API"],
    },
  ];

  const solanaProjects = [
    {
      title: "Solana Token Launchpad",
      description: "A comprehensive token launchpad built on Solana blockchain. Features include token creation, IDO management, liquidity pool setup, and vesting schedules.",
      tags: ["Solana", "DeFi", "Launchpad"],
      liveLink: "https://sol.dx.app/",
      githubLink: "https://github.com/bluntbrain/solana-launchpad",
      techStack: ["Rust", "Anchor", "React", "Solana Program Library"],
    },
    {
      title: "Solana Lending Protocol",
      description: "A decentralized lending protocol on Solana allowing users to deposit collateral, borrow assets, and earn interest. Implements risk management features and liquidation mechanisms.",
      tags: ["Solana", "Lending", "DeFi"],
      githubLink: "https://github.com/bluntbrain/solana-lending-protocol",
      techStack: ["Rust", "Anchor", "TypeScript", "Solana Program Library"],
    },
    {
      title: "Solana NFT Marketplace",
      description: "Full-featured NFT marketplace with minting, trading, and auction capabilities. Built with Metaplex standards and optimized for low transaction costs.",
      tags: ["Solana", "NFT", "Marketplace"],
      githubLink: "https://github.com/bluntbrain/solana-nft-marketplace",
      techStack: ["Rust", "Anchor", "Metaplex", "React"],
    },
  ];

  const certifications = [
    {
      name: "Ultimate Rust Crash Course",
      provider: "Nathan Stocks",
      link: "https://www.udemy.com/certificate/UC-144bbd90-4f91-4b5a-a1f0-2b26b3d507aa/",
    },
    {
      name: "Rust Intermediate Concepts",
      provider: "Nathan Stocks", 
      link: "https://www.udemy.com/certificate/UC-c839d9fd-bd30-458d-b431-0213c2cc8c3f/",
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} />
          Back to Tech Selection
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Rust & Solana Development
          </h1>
          <p className="text-gray-400 text-lg">
            Systems programming with Rust and blockchain development on Solana
          </p>
        </motion.div>

        {/* Certifications */}
        <Card className="bg-zinc-900 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-zinc-800 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 mb-2">by {cert.provider}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={14} />
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </Card>

        {/* Rust Projects */}
        <Card className="bg-zinc-900 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">Rust Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {rustProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-800 rounded-xl p-6 border border-zinc-700"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-orange-400/10 text-orange-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-3 text-orange-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Solana Projects */}
        <Card className="bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Solana Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {solanaProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-800 rounded-xl p-6 border border-zinc-700"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-purple-400/10 text-purple-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-3 text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}