"use client";

import React from "react";
import { Card } from "../../ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface SolanaDetailsProps {
  onBack: () => void;
}

// rust protocol engineer section - showcases solana smart contracts and programs
export function SolanaDetails({ onBack }: SolanaDetailsProps) {
  const REPO_LINK = "https://github.com/bluntbrain/solana-projects";

  // anchor framework programs
  const anchorPrograms = [
    { title: "Calculator", description: "Basic calculator with arithmetic operations", tags: ["Anchor", "Beginner"] },
    { title: "Vault", description: "Secure vault program for SOL deposits and withdrawals", tags: ["Anchor", "Beginner"] },
    { title: "Escrow", description: "Trustless escrow for token swaps between parties", tags: ["Anchor", "Beginner"] },
    { title: "Flash Loan", description: "Flash loan protocol with atomic transactions", tags: ["Anchor", "Intermediate"] },
    { title: "CPI Contract", description: "Cross-program invocation for SOL transfers", tags: ["Anchor", "CPI"] },
    { title: "CPI SOL Transfer", description: "CPI using system program invoke", tags: ["Anchor", "CPI"] },
    { title: "Staking Contract", description: "SOL staking with points accumulation system", tags: ["Anchor", "DeFi"] },
  ];

  // pinocchio framework programs - lightweight no_std
  const pinocchioPrograms = [
    { title: "Blueshift Vault", description: "Lightweight no_std vault program", tags: ["Pinocchio", "no_std"] },
    { title: "Vault", description: "Optimized vault using Pinocchio framework", tags: ["Pinocchio", "Intermediate"] },
    { title: "Escrow", description: "Minimal escrow implementation", tags: ["Pinocchio", "Intermediate"] },
    { title: "AMM", description: "Automated market maker protocol", tags: ["Pinocchio", "Advanced"] },
    { title: "Secp256r1 Vault", description: "Vault with secp256r1 signature verification", tags: ["Pinocchio", "Intermediate"] },
    { title: "Flash Loan", description: "Flash loan with minimal compute units", tags: ["Pinocchio", "Intermediate"] },
    { title: "Quantum Vault", description: "Quantum-resistant vault implementation", tags: ["Pinocchio", "Intermediate"] },
  ];

  // typescript and assembly programs
  const otherPrograms = [
    { title: "Mint SPL Token", description: "SPL token minting program", tags: ["TypeScript", "Beginner"] },
    { title: "Assembly Memo", description: "On-chain memo using assembly", tags: ["Assembly", "Intermediate"] },
    { title: "Assembly Slippage", description: "Slippage protection in assembly", tags: ["Assembly", "Advanced"] },
    { title: "Assembly Timeout", description: "Transaction timeout handler", tags: ["Assembly", "Intermediate"] },
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

  // reusable program card component with clear button
  const ProgramCard = ({ program, colorClass, bgClass }: { program: { title: string; description: string; tags: string[] }; colorClass: string; bgClass: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-800 rounded-lg p-3 sm:p-4 border border-zinc-700 hover:border-zinc-600 transition-all"
    >
      <div className="flex items-start justify-between mb-1.5 sm:mb-2">
        <h3 className={`font-semibold text-base ${colorClass}`}>{program.title}</h3>
        <div className="flex gap-1 flex-shrink-0">
          {program.tags.map((tag, i) => (
            <span key={i} className={`px-1.5 sm:px-2 py-0.5 ${bgClass} ${colorClass} rounded text-[10px] sm:text-xs`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-2 sm:mb-3">{program.description}</p>
      <a
        href={REPO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 ${bgClass} ${colorClass} hover:opacity-80 rounded text-xs border border-current/20 transition-colors`}
      >
        <ExternalLink size={12} />
        View Source
      </a>
    </motion.div>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      <motion.button
        onClick={onBack}
        className="mb-4 sm:mb-6 flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
        whileHover={{ x: -5 }}
      >
        <ArrowLeft size={20} />
        Back to Overview
      </motion.button>

      {/* header section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-8"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Rust Protocol Engineer
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4">
          Building secure, high-performance Solana smart contracts and programs
        </p>
        <a
          href={REPO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors border border-primary/30 text-sm sm:text-base"
        >
          <ExternalLink size={16} />
          View All on GitHub
        </a>
      </motion.div>

      {/* anchor programs section */}
      <Card className="bg-zinc-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-primary">Anchor Programs</h2>
        <p className="text-gray-500 text-sm mb-3 sm:mb-6">Solana smart contracts built with Anchor framework</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {anchorPrograms.map((program, index) => (
            <ProgramCard key={index} program={program} colorClass="text-primary" bgClass="bg-primary/10" />
          ))}
        </div>
      </Card>

      {/* pinocchio programs section */}
      <Card className="bg-zinc-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-accent">Pinocchio Programs</h2>
        <p className="text-gray-500 text-sm mb-3 sm:mb-6">Lightweight no_std Solana programs using Pinocchio framework</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {pinocchioPrograms.map((program, index) => (
            <ProgramCard key={index} program={program} colorClass="text-accent" bgClass="bg-accent/10" />
          ))}
        </div>
      </Card>

      {/* typescript and assembly programs */}
      <Card className="bg-zinc-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-secondary">TypeScript & Assembly</h2>
        <p className="text-gray-500 text-sm mb-3 sm:mb-6">Additional Solana programs in TypeScript and Assembly</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {otherPrograms.map((program, index) => (
            <ProgramCard key={index} program={program} colorClass="text-secondary" bgClass="bg-secondary/10" />
          ))}
        </div>
      </Card>

      {/* certifications */}
      <Card className="bg-zinc-900 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-zinc-800 p-3 sm:p-4 rounded-lg border border-zinc-700">
              <h3 className="font-semibold text-white text-base mb-1 sm:mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-sm mb-2">by {cert.provider}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1 text-sm"
              >
                <ExternalLink size={14} />
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}