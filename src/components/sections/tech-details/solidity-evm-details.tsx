"use client";

import React from "react";
import { Card } from "../../ui/card";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { SkillRadial } from "../../ui/skill-radial";

interface SolidityEvmDetailsProps {
  onBack: () => void;
}

export function SolidityEvmDetails({ onBack }: SolidityEvmDetailsProps) {
  const evmProjects = [
    {
      title: "Decentralized Stablecoin System",
      description:
        "A decentralized, multi-collateral stablecoin system pegged 1:1 with USD. Features WETH/WBTC collateral, Chainlink price feeds, 150% minimum collateralization ratio, and automatic liquidations. Built with gas-optimized smart contracts and comprehensive testing in Foundry.",
      tags: ["DeFi", "Stablecoin", "Foundry"],
      githubLink: "https://github.com/bluntbrain/stable-coin-foundry",
      techStack: ["Solidity", "Foundry", "Chainlink", "OpenZeppelin"],
    },
    {
      title: "dx.fun",
      description:
        "A sophisticated dApp built on Base chain featuring token creation, live chat, comments tab, and live token chart integration with Dextools. Implemented real-time on-chain data fetching for buy/sell events to enhance user interaction.",
      tags: ["Next.js", "Base Chain", "DeFi"],
      liveLink: "https://dx.fun",
      techStack: ["Solidity", "Next.js", "Ethers.js", "Base Chain"],
    },
    {
      title: "Glitter Explorer & Multi-Axis Charts",
      description:
        "Developed a comprehensive blockchain explorer for monitoring transactions and token details across multiple chains. Supports USDC, SOL, xSOL, XGLI, ALGO, and xALGO. Implemented multi-axis charting leading to 70% increase in user engagement.",
      tags: ["Explorer", "Charts", "Multi-Chain"],
      liveLink: "https://explorer.example.com",
      demoLink: "https://charts.example.com",
      techStack: ["React.js", "Web3.js", "Chart.js", "GraphQL"],
    },
    {
      title: "DxSale Launchpad",
      description:
        "Built a comprehensive DeFi platform that streamlines token launches with integrated tools for token minting, fundraising, and liquidity locking. Features automated smart contract deployment and security measures.",
      tags: ["DeFi", "Launchpad"],
      liveLink: "https://dxsale.example.com",
      techStack: ["Solidity", "Next.js", "Hardhat", "OpenZeppelin"],
    },
    {
      title: "Redstone Blockchain Data Explorer",
      description:
        "Web-based interface to explore and display data from the Redstone Holesky Blockchain, specifically focusing on game data. Utilizing the MUD Indexer for data retrieval, it features a PostgreSQL database for storage, a Node.js backend for data manipulation and API endpoints, and a simple frontend for user interaction.",
      tags: ["Explorer", "Gaming", "MUD"],
      githubLink:
        "https://github.com/bluntbrain/redstone-blockchain-data-explorer",
      liveLink: "https://redstone-explorer.example.com",
      techStack: ["Solidity", "MUD", "PostgreSQL", "Node.js"],
    },
    {
      title: "Decentralised Voting dApp",
      description:
        "Led the frontend development and smart contract deployment for this project, using React.js, Firebase, and Solidity. Successfully deployed the smart contract on Polygon Mumbai Testnet, enabling secure and transparent voting that reduces voting costs by up to 80% compared to traditional methods.",
      tags: ["Voting", "Polygon", "DApp"],
      githubLink: "https://github.com/bluntbrain/voting-app-eth-india",
      liveLink: "https://devfolio.co/projects/ballet-on-chain-9d77",
      techStack: ["Solidity", "Hardhat", "Polygon", "React.js"],
    },
  ];

  // skills with icons and proficiency levels
  const expertise = [
    {
      name: "Solidity",
      level: 90,
      color: "text-blue-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 1.75l-6.25 10.5h4.5L12 16.25l1.75-4h4.5L12 1.75zm0 5.5l2.5 4.25h-2l-1.5 2.5v-2.5H8.5L12 7.25z" />
        </svg>
      ),
    },
    {
      name: "Ethereum",
      level: 88,
      color: "text-purple-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 1.75L5.75 12.25 12 16l6.25-3.75L12 1.75zm0 3l4.25 6.5L12 13.5l-4.25-3.25L12 4.75zm-6.25 9L12 17.5l6.25-3.75L12 22.25 5.75 13.75z" />
        </svg>
      ),
    },
    {
      name: "Hardhat",
      level: 85,
      color: "text-yellow-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4zm0 2.18l6 3v5.32c0 4.38-2.94 8.58-6 9.64V4.18z" />
        </svg>
      ),
    },
    {
      name: "Foundry",
      level: 82,
      color: "text-orange-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 3L4 9v6l8 6 8-6V9l-8-6zm0 2.18L18 9v5l-6 4.5L6 14V9l6-3.82z" />
        </svg>
      ),
    },
    {
      name: "Ethers.js",
      level: 90,
      color: "text-blue-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      name: "OpenZeppelin",
      level: 85,
      color: "text-blue-300",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 4c1.86 0 3.41 1.28 3.86 3H8.14c.45-1.72 2-3 3.86-3zm3.97 5H8.03c.07 1.65.73 3.14 1.79 4.28L12 17.5l2.18-2.22c1.06-1.14 1.72-2.63 1.79-4.28z" />
        </svg>
      ),
    },
    {
      name: "Chainlink",
      level: 78,
      color: "text-blue-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 1L3 6.5v11L12 23l9-5.5v-11L12 1zm0 3.31l5.74 3.5v7l-5.74 3.5-5.74-3.5v-7l5.74-3.5z" />
        </svg>
      ),
    },
    {
      name: "DeFi",
      level: 85,
      color: "text-green-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
    },
    {
      name: "Gas Optim",
      level: 80,
      color: "text-yellow-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14a2 2 0 0 0-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      ),
    },
    {
      name: "Security",
      level: 82,
      color: "text-red-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-4zm0 10.99h6c-.53 4.12-3.28 7.79-6 8.94V12H6V6.3l6-2.12v5.81z" />
        </svg>
      ),
    },
  ];

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-8"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Blockchain Developer (Ethereum)
        </h1>
        <p className="text-gh-300 text-base sm:text-lg">
          Smart contract development and DeFi protocols on Ethereum and
          EVM-compatible chains
        </p>
      </motion.div>

      {/* Skills */}
      <Card className="bg-gh-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">
          Technical Expertise
        </h2>
        <SkillRadial skills={expertise} />
      </Card>

      {/* Experience */}

      {/* Projects */}
      <Card className="bg-gh-900 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {evmProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gh-800 rounded-xl p-4 sm:p-6 border border-gh-700"
            >
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-accent">
                {project.title}
              </h3>
              <p className="text-gh-300 mb-3 sm:mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs text-gh-300 bg-gh-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline flex items-center gap-1 text-sm"
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
                    className="text-primary hover:underline flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}
