"use client";

import React from "react";
import { Smartphone, Layers } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TechSelectionProps {
  onTechSelect: (tech: string) => void;
}

export function TechSelection({ onTechSelect }: TechSelectionProps) {
  const techBlocks = [
    {
      id: "solana",
      title: "Rust & Solana",
      description:
        "Systems programming with Rust and blockchain development on Solana",
      icon: <Image src="/images/solana.svg" alt="Solana" width={40} height={40} className="object-contain w-10 h-10" />,
      color: "from-primary to-secondary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      hoverColor: "hover:border-primary/50",
      hoverText: "Click to explore Rust & Solana projects",
    },
    {
      id: "solidity-evm",
      title: "Solidity & EVM",
      description: "Smart contract development and DeFi protocols on Ethereum",
      icon: <Image src="/images/ethereum.svg" alt="Ethereum" width={40} height={40} className="object-contain w-10 h-10" />,
      color: "from-accent to-primary",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
      hoverColor: "hover:border-accent/50",
      hoverText: "Click to explore Solidity & EVM projects",
    },
    {
      id: "frontend",
      title: "Frontend",
      description: "Next.js, React.js, and modern web development",
      icon: <Layers size={32} />,
      color: "from-secondary to-accent",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      hoverColor: "hover:border-secondary/50",
      hoverText: "Click to explore Frontend projects",
    },
    {
      id: "mobile",
      title: "Mobile",
      description: "React Native, Android, and iOS development",
      icon: <Smartphone size={32} />,
      color: "from-primary to-accent",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      hoverColor: "hover:border-primary/50",
      hoverText: "Click to explore Mobile projects",
    },
  ];

  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {techBlocks.map((tech, index) => (
          <motion.button
            key={tech.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onTechSelect(tech.id)}
            className={`
              ${tech.bgColor} ${tech.borderColor} ${tech.hoverColor}
              group relative bg-zinc-900 rounded-xl p-4
              border-2 cursor-pointer transition-all duration-300
              hover:shadow-xl hover:shadow-primary/20
              flex flex-col items-center gap-2
            `}
          >
            {/* Icon */}
            {tech.id === "solana" || tech.id === "solidity-evm" ? (
              <div className="w-12 h-12 flex items-center justify-center">
                {tech.icon}
              </div>
            ) : (
              <div className={`p-2 rounded-lg bg-gradient-to-br ${tech.color} shadow-lg`}>
                <div className="text-white">{tech.icon}</div>
              </div>
            )}

            {/* Title */}
            <h3 className="text-sm sm:text-base font-bold text-white">
              {tech.title}
            </h3>

            {/* Click indicator */}
            <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-400 group-hover:text-primary transition-colors">
              <span>View Projects</span>
              <svg
                className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Pulse effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
