"use client";

import React from "react";
import { Card } from "../ui/card";
import { Code, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface TechSelectionProps {
  onTechSelect: (tech: string) => void;
}

export function TechSelection({ onTechSelect }: TechSelectionProps) {
  const techBlocks = [
    {
      id: "rust",
      title: "Rust & Solana",
      description: "Blockchain development, smart contracts, and systems programming",
      icon: <Code size={32} />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      hoverColor: "hover:border-orange-500/50",
    },
    {
      id: "frontend",
      title: "Frontend",
      description: "Next.js, React.js, and modern web development",
      icon: <Globe size={32} />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      hoverColor: "hover:border-blue-500/50",
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
    },
  ];

  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-4 mb-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Choose Your Tech Focus
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techBlocks.map((tech, index) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className={`
                ${tech.bgColor} ${tech.borderColor} ${tech.hoverColor}
                border-2 cursor-pointer transition-all duration-300
                hover:shadow-lg hover:shadow-orange-500/10
                p-6 h-full
              `}
              onClick={() => onTechSelect(tech.id)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-4 rounded-full bg-gradient-to-r ${tech.color}`}>
                  <div className="text-white">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {tech.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {tech.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}