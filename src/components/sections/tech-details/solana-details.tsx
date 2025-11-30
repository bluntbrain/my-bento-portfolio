"use client";

import React from "react";
import { Card } from "../../ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { SkillRadial } from "../../ui/skill-radial";

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

  // skills with icons and proficiency levels
  const skills = [
    {
      name: "Rust",
      level: 88,
      color: "text-orange-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M23.687 11.709l-.995-.616a13.559 13.559 0 0 0-.028-.29l.855-.797a.344.344 0 0 0-.114-.571l-1.093-.409a8.392 8.392 0 0 0-.086-.282l.682-.95a.344.344 0 0 0-.201-.539l-1.156-.244a9.15 9.15 0 0 0-.14-.261l.49-1.076a.344.344 0 0 0-.282-.487l-1.18-.066a9.37 9.37 0 0 0-.189-.227l.276-1.167a.344.344 0 0 0-.357-.418l-1.163.114a8.903 8.903 0 0 0-.232-.187l.055-1.22a.344.344 0 0 0-.42-.34l-1.105.292a8.635 8.635 0 0 0-.265-.14l-.168-1.23a.344.344 0 0 0-.475-.256l-1.01.47a9.26 9.26 0 0 0-.29-.085l-.386-1.196a.344.344 0 0 0-.517-.166l-.887.635a8.763 8.763 0 0 0-.304-.028l-.588-1.122a.344.344 0 0 0-.546-.072l-.74.78a9.107 9.107 0 0 0-.305.032l-.773-1.01a.344.344 0 0 0-.561.026l-.567.904a8.907 8.907 0 0 0-.293.086l-.932-.864a.344.344 0 0 0-.56.12l-.376 1.003a8.59 8.59 0 0 0-.265.14l-1.062-.686a.344.344 0 0 0-.541.206l-.17 1.066a9.05 9.05 0 0 0-.227.187l-1.153-.48a.344.344 0 0 0-.505.282l.05 1.094a8.974 8.974 0 0 0-.178.227l-1.204-.254a.344.344 0 0 0-.453.344l.27 1.085a8.62 8.62 0 0 0-.122.259l-1.213-.012a.344.344 0 0 0-.386.39l.48 1.04a8.638 8.638 0 0 0-.062.28l-1.18.232a.344.344 0 0 0-.305.425l.68.96a8.707 8.707 0 0 0-.002.29l-1.106.454a.344.344 0 0 0-.211.446l.862.847a8.52 8.52 0 0 0 .055.282l-.99.659a.344.344 0 0 0-.107.458l1.018.701c.025.09.05.178.078.266l-.838.834a.344.344 0 0 0 .002.458l1.14.526c.038.083.077.165.118.246l-.657.972a.344.344 0 0 0 .112.448l1.229.327c.052.073.105.145.16.216l-.449 1.075a.344.344 0 0 0 .219.425l1.28.112c.063.062.127.123.193.183l-.226 1.137a.344.344 0 0 0 .317.392l1.29-.11c.072.05.145.098.218.144l.008 1.156a.344.344 0 0 0 .403.346l1.262-.333c.077.036.155.07.234.104l.239 1.132a.344.344 0 0 0 .476.29l1.196-.545c.08.022.161.043.242.062l.46 1.068a.344.344 0 0 0 .535.225l1.092-.737c.081.008.163.014.245.02l.668.963a.344.344 0 0 0 .576.153l.958-.904c.08-.006.159-.014.237-.022l.857.823a.344.344 0 0 0 .6.076l.796-1.043c.074-.018.149-.036.222-.055l1.019.651a.344.344 0 0 0 .603-.007l.614-1.144c.067-.028.133-.057.199-.087l1.148.455a.344.344 0 0 0 .588-.092l.415-1.21c.057-.038.114-.078.17-.119l1.24.24a.344.344 0 0 0 .554-.175l.205-1.235c.045-.048.09-.097.134-.147l1.29.015a.344.344 0 0 0 .5-.252l-.012-1.218c.033-.056.064-.112.095-.169l1.296-.219a.344.344 0 0 0 .431-.32l-.226-1.16c.02-.06.039-.122.057-.183l1.257-.454a.344.344 0 0 0 .346-.375l-.428-1.063c.007-.063.013-.126.019-.189l1.176-.68a.344.344 0 0 0 .248-.417z"/>
        </svg>
      ),
    },
    {
      name: "Solana",
      level: 85,
      color: "text-primary",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M17.28 8.72a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L10.75 14.19l5.47-5.47a.75.75 0 0 1 1.06 0z"/>
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      name: "Anchor",
      level: 85,
      color: "text-blue-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v2.17A6.002 6.002 0 0 1 17.83 14H19a1 1 0 1 1 0 2h-1.17A6.002 6.002 0 0 1 13 20.83V22a1 1 0 1 1-2 0v-1.17A6.002 6.002 0 0 1 6.17 16H5a1 1 0 1 1 0-2h1.17A6.002 6.002 0 0 1 11 8.17V6h-1a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1zm0 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
        </svg>
      ),
    },
    {
      name: "Pinocchio",
      level: 78,
      color: "text-accent",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      name: "SPL Tokens",
      level: 82,
      color: "text-purple-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
        </svg>
      ),
    },
    {
      name: "PDAs",
      level: 85,
      color: "text-cyan-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      ),
    },
    {
      name: "CPIs",
      level: 80,
      color: "text-yellow-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>
      ),
    },
    {
      name: "Testing",
      level: 82,
      color: "text-green-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      ),
    },
  ];

  // reusable program card component with clear button
  const ProgramCard = ({ program, colorClass, bgClass }: { program: { title: string; description: string; tags: string[] }; colorClass: string; bgClass: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gh-800 rounded-lg p-3 sm:p-4 border border-gh-700 hover:border-gh-600 transition-all"
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
      <p className="text-gh-400 text-sm mb-2 sm:mb-3">{program.description}</p>
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
        className="mb-4 sm:mb-6 flex items-center gap-2 px-3 py-1.5 text-gh-300 hover:text-white bg-gh-800 hover:bg-gh-700 border border-gh-700 rounded-lg transition-colors text-sm"
        whileHover={{ x: -3 }}
      >
        <ArrowLeft size={16} />
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
        <p className="text-gh-300 text-base sm:text-lg mb-3 sm:mb-4">
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

      {/* Skills */}
      <Card className="bg-gh-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">Technical Skills</h2>
        <SkillRadial skills={skills} />
      </Card>

      {/* anchor programs section */}
      <Card className="bg-gh-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-primary">Anchor Programs</h2>
        <p className="text-gh-500 text-sm mb-3 sm:mb-6">Solana smart contracts built with Anchor framework</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {anchorPrograms.map((program, index) => (
            <ProgramCard key={index} program={program} colorClass="text-primary" bgClass="bg-primary/10" />
          ))}
        </div>
      </Card>

      {/* pinocchio programs section */}
      <Card className="bg-gh-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-accent">Pinocchio Programs</h2>
        <p className="text-gh-500 text-sm mb-3 sm:mb-6">Lightweight no_std Solana programs using Pinocchio framework</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {pinocchioPrograms.map((program, index) => (
            <ProgramCard key={index} program={program} colorClass="text-accent" bgClass="bg-accent/10" />
          ))}
        </div>
      </Card>

      {/* typescript and assembly programs */}
      <Card className="bg-gh-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-secondary">TypeScript & Assembly</h2>
        <p className="text-gh-500 text-sm mb-3 sm:mb-6">Additional Solana programs in TypeScript and Assembly</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {otherPrograms.map((program, index) => (
            <ProgramCard key={index} program={program} colorClass="text-secondary" bgClass="bg-secondary/10" />
          ))}
        </div>
      </Card>

      {/* certifications */}
      <Card className="bg-gh-900 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gh-800 p-3 sm:p-4 rounded-lg border border-gh-700">
              <h3 className="font-semibold text-white text-base mb-1 sm:mb-2">{cert.name}</h3>
              <p className="text-gh-400 text-sm mb-2">by {cert.provider}</p>
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