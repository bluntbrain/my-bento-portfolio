"use client";

import React from "react";
import { Card } from "../../ui/card";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface FrontendDetailsProps {
  onBack: () => void;
}

export function FrontendDetails({ onBack }: FrontendDetailsProps) {
  const frontendProjects = [
    {
      title: "Next.js Movie Ballot App",
      description: "Next.js Movie Ballot App is a web application designed for users to participate in movie award voting. This app allows users to browse different award categories, view nominees, and cast their votes.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      githubLink: "https://github.com/bluntbrain/next-js-movie-ballot-app",
      liveLink: "https://next-js-movie-ballot-app.vercel.app/",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    {
      title: "dx.fun",
      description: "A sophisticated dApp built on Base chain featuring token creation, live chat, comments tab, and live token chart integration with Dextools. Implemented real-time on-chain data fetching for buy/sell events.",
      tags: ["Next.js", "Base Chain", "DeFi"],
      liveLink: "https://dx.fun",
      techStack: ["Next.js", "Ethers.js", "Base Chain", "WebSocket"],
    },
    {
      title: "DxSale Launchpad",
      description: "Built a comprehensive DeFi platform that streamlines token launches with integrated tools for token minting, fundraising, and liquidity locking. Features automated smart contract deployment.",
      tags: ["Next.js", "DeFi", "Web3"],
      liveLink: "https://dxsale.example.com",
      techStack: ["Next.js", "Ethers.js", "Hardhat", "TailwindCSS"],
    },
    {
      title: "Glitter Explorer",
      description: "Developed a comprehensive blockchain explorer for monitoring transactions and token details across multiple chains. Supports USDC, SOL, xSOL, XGLI, ALGO, and xALGO with multi-axis charting.",
      tags: ["React.js", "Charts", "Multi-Chain"],
      liveLink: "https://explorer.example.com",
      techStack: ["React.js", "Web3.js", "Chart.js", "GraphQL"],
    },
    {
      title: "Coupl App Landing",
      description: "Landing page for India's first neobank designed for couples, offering a joint wallet and linked cards. Built with modern React.js and optimized for conversions.",
      tags: ["React.js", "Landing Page"],
      liveLink: "https://coupl.app",
      techStack: ["React.js", "Styled Components", "Framer Motion"],
    },
  ];

  const skills = [
    "Next.js & React Server Components",
    "TypeScript & JavaScript",
    "State Management (Redux, Zustand)",
    "Performance Optimization",
    "Responsive Design",
    "SEO & Web Vitals",
    "Testing (Jest, React Testing Library)",
    "Modern CSS (Tailwind, Styled Components)",
  ];

  const experience = [
    {
      company: "DxSale Network",
      role: "Senior Frontend Engineer",
      period: "March 2024 - Present",
      achievements: [
        "Built core frontend features for DeFi launchpad using Next.js and TailwindCSS",
        "Improved UI performance and reduced bounce rate through optimization",
        "Helped launch over 500 token sales, generating $100K+ in fees from $10M+ volume",
        "Implemented SEO best practices, improving organic traffic by 3x over 6 months",
      ],
    },
    {
      company: "Krane Apps",
      role: "Co-founder",
      period: "February 2023 - March 2024",
      achievements: [
        "Led frontend development using Next.js for multiple blockchain projects",
        "Developed Glitter Finance explorer with real-time data visualization",
        "Implemented responsive designs and performance optimizations",
      ],
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Frontend Development
          </h1>
          <p className="text-gray-400 text-lg">
            Modern web development with Next.js, React.js, and cutting-edge technologies
          </p>
        </motion.div>

        {/* Skills */}
        <Card className="bg-zinc-900 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="bg-zinc-800 p-3 rounded-lg text-center">
                <span className="text-sm text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Experience */}
        <Card className="bg-zinc-900 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Frontend Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-white">{exp.role}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 text-sm">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Projects */}
        <Card className="bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {frontendProjects.map((project, index) => (
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
                      className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-3 text-blue-400">
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
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline flex items-center gap-1 text-sm"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}