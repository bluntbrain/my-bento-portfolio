"use client";

import React from "react";
import { Card } from "../../ui/card";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface SolidityEvmDetailsProps {
  onBack: () => void;
}

export function SolidityEvmDetails({ onBack }: SolidityEvmDetailsProps) {
  const evmProjects = [
    {
      title: "Decentralized Stablecoin System",
      description: "A decentralized, multi-collateral stablecoin system pegged 1:1 with USD. Features WETH/WBTC collateral, Chainlink price feeds, 150% minimum collateralization ratio, and automatic liquidations. Built with gas-optimized smart contracts and comprehensive testing in Foundry.",
      tags: ["DeFi", "Stablecoin", "Foundry"],
      githubLink: "https://github.com/bluntbrain/stable-coin-foundry",
      techStack: ["Solidity", "Foundry", "Chainlink", "OpenZeppelin"],
    },
    {
      title: "dx.fun",
      description: "A sophisticated dApp built on Base chain featuring token creation, live chat, comments tab, and live token chart integration with Dextools. Implemented real-time on-chain data fetching for buy/sell events to enhance user interaction.",
      tags: ["Next.js", "Base Chain", "DeFi"],
      liveLink: "https://dx.fun",
      techStack: ["Solidity", "Next.js", "Ethers.js", "Base Chain"],
    },
    {
      title: "Glitter Explorer & Multi-Axis Charts",
      description: "Developed a comprehensive blockchain explorer for monitoring transactions and token details across multiple chains. Supports USDC, SOL, xSOL, XGLI, ALGO, and xALGO. Implemented multi-axis charting leading to 70% increase in user engagement.",
      tags: ["Explorer", "Charts", "Multi-Chain"],
      liveLink: "https://explorer.example.com",
      demoLink: "https://charts.example.com",
      techStack: ["React.js", "Web3.js", "Chart.js", "GraphQL"],
    },
    {
      title: "DxSale Launchpad",
      description: "Built a comprehensive DeFi platform that streamlines token launches with integrated tools for token minting, fundraising, and liquidity locking. Features automated smart contract deployment and security measures.",
      tags: ["DeFi", "Launchpad"],
      liveLink: "https://dxsale.example.com",
      techStack: ["Solidity", "Next.js", "Hardhat", "OpenZeppelin"],
    },
    {
      title: "Redstone Blockchain Data Explorer",
      description: "Web-based interface to explore and display data from the Redstone Holesky Blockchain, specifically focusing on game data. Utilizing the MUD Indexer for data retrieval, it features a PostgreSQL database for storage, a Node.js backend for data manipulation and API endpoints, and a simple frontend for user interaction.",
      tags: ["Explorer", "Gaming", "MUD"],
      githubLink: "https://github.com/bluntbrain/redstone-blockchain-data-explorer",
      liveLink: "https://redstone-explorer.example.com",
      techStack: ["Solidity", "MUD", "PostgreSQL", "Node.js"],
    },
    {
      title: "Decentralised Voting dApp",
      description: "Led the frontend development and smart contract deployment for this project, using React.js, Firebase, and Solidity. Successfully deployed the smart contract on Polygon Mumbai Testnet, enabling secure and transparent voting that reduces voting costs by up to 80% compared to traditional methods.",
      tags: ["Voting", "Polygon", "DApp"],
      githubLink: "https://github.com/bluntbrain/voting-app-eth-india",
      liveLink: "https://devfolio.co/projects/ballet-on-chain-9d77",
      techStack: ["Solidity", "Hardhat", "Polygon", "React.js"],
    },
  ];

  const expertise = [
    "Smart Contract Development",
    "DeFi Protocol Design",
    "Token Standards (ERC20/721/1155)",
    "Gas Optimization",
    "Security Best Practices",
    "Multi-Chain Development",
    "Foundry & Hardhat",
    "Ethers.js & Web3.js",
    "Chainlink Integration",
    "OpenZeppelin Libraries",
    "Upgradeable Contracts",
    "Cross-Chain Protocols",
  ];

  const experience = [
    {
      company: "DxSale Network",
      role: "Senior Frontend Engineer",
      period: "March 2024 - Present",
      achievements: [
        "Built comprehensive DeFi platform with token launch capabilities",
        "Integrated smart contract interactions with frontend using Ethers.js",
        "Helped launch over 500 token sales generating $100K+ in fees from $10M+ volume",
        "Implemented gas optimization strategies reducing transaction costs by 30%",
      ],
    },
    {
      company: "Krane Apps",
      role: "Co-founder",
      period: "February 2023 - March 2024",
      achievements: [
        "Led blockchain development team focusing on EVM-compatible chains",
        "Developed multiple DeFi protocols and dApps",
        "Implemented cross-chain functionality and multi-chain support",
        "Built comprehensive testing suites using Foundry and Hardhat",
      ],
    },
  ];

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 sm:mb-8"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Blockchain Developer (Ethereum)
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Smart contract development and DeFi protocols on Ethereum and EVM-compatible chains
        </p>
      </motion.div>

      {/* Skills */}
      <Card className="bg-zinc-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent">Technical Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {expertise.map((skill, index) => (
            <div key={index} className="bg-zinc-800 p-2 sm:p-3 rounded-lg text-center">
              <span className="text-sm text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Experience */}
      <Card className="bg-zinc-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Blockchain Experience</h2>
        <div className="space-y-4 sm:space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="bg-zinc-800 p-4 sm:p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white">{exp.role}</h3>
                  <p className="text-accent text-sm sm:text-base">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 text-sm">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Projects */}
      <Card className="bg-zinc-900 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {evmProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800 rounded-xl p-4 sm:p-6 border border-zinc-700"
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
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded"
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