"use client";

import React from "react";
import { Card } from "../ui/card";
import { Smartphone, Zap, Coins, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface TechSelectionProps {
  onTechSelect: (tech: string) => void;
}

export function TechSelection({ onTechSelect }: TechSelectionProps) {
  const techBlocks = [
    {
      id: "rust-solana",
      title: "Rust & Solana",
      description: "Systems programming with Rust and blockchain development on Solana",
      icon: <Zap size={32} />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      hoverColor: "hover:border-orange-500/50",
      hoverText: "Click to explore Rust & Solana projects",
    },
    {
      id: "solidity-evm",
      title: "Solidity & EVM",
      description: "Smart contract development and DeFi protocols on Ethereum",
      icon: <Coins size={32} />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      hoverColor: "hover:border-yellow-500/50",
      hoverText: "Click to explore Solidity & EVM projects",
    },
    {
      id: "frontend",
      title: "Frontend",
      description: "Next.js, React.js, and modern web development",
      icon: <Layers size={32} />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      hoverColor: "hover:border-blue-500/50",
      hoverText: "Click to explore Frontend projects",
    },
    {
      id: "mobile",
      title: "Mobile",
      description: "React Native, Android, and iOS development",
      icon: <Smartphone size={32} />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      hoverColor: "hover:border-green-500/50",
      hoverText: "Click to explore Mobile projects",
    },
  ];

  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {techBlocks.map((tech, index) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative"
          >
            <Card
              className={`
                ${tech.bgColor} ${tech.borderColor} ${tech.hoverColor}
                border cursor-pointer transition-all duration-300 relative
                hover:shadow-lg hover:shadow-orange-500/10 bg-zinc-900 overflow-hidden
                p-4 h-full min-h-[140px]
              `}
              onClick={() => onTechSelect(tech.id)}
            >
              <div className="flex flex-col items-center text-center space-y-3 h-full">
                <div className={`p-3 rounded-full bg-gradient-to-r ${tech.color}`}>
                  <div className="text-white">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {tech.title}
                </h3>
                <p className="text-gray-400 text-xs flex-grow">
                  {tech.description}
                </p>
                
                {/* Always visible click button */}
                <div className="mt-auto pt-2">
                  <div className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-xs text-white transition-all duration-200 group-hover:scale-105">
                    Click to see projects
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}