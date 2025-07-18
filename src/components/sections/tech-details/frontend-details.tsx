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
      description: "Next.js Movie Ballot App is a web application designed for users to participate in movie award voting. This app allows users to browse different award categories, view nominees, and cast their votes. Additionally, users can view voting results in real-time through a modal window.",
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
      title: "Jar App",
      description: "Worked as Frontend Team Lead on this savings and investment app. Improved app performance by 60% through optimization techniques and implemented CI/CD pipelines reducing deployment time by 70%.",
      tags: ["React Native", "Fintech", "Investment"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.jar.app",
      screenshot: "/images/jardemo.png",
      techStack: ["React Native", "Redux", "Performance Optimization", "CI/CD"],
    },
    {
      title: "Coupl App",
      description: "Led the end-to-end development of the app from inception to launch, successfully acquiring more than 10,000 users from scratch within just 2 months post-launch. Coupl is India's first neobank designed for couples, offering a joint wallet and linked cards to facilitate easy pooling and spending of money for shared expenses without the need for a traditional joint account.",
      tags: ["React Native", "Fintech"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.couplapp",
      screenshot: "/images/coupldemo.png",
      techStack: ["React Native", "Firebase", "Stripe", "Redux"],
    },
    {
      title: "SuiSage - AI-Powered Web3 Portfolio Assistant",
      description: "A revolutionary AI-powered Web3 portfolio assistant that chains multiple AI models for superior analysis. Unlike traditional AI apps that give one response from one model, SuiSage connects OpenAI and Gemini in sequence where the second AI reads and builds upon the first AI's response. Features three modes: Chain 1 (OpenAI → Gemini), Chain 2 (Gemini → OpenAI), and Compare mode for side-by-side analysis. Includes voice responses with 30+ voices, multi-network Sui support (mainnet/testnet/devnet/localnet), portfolio security recommendations, and performance analytics to track which AI approach works best.",
      tags: ["React Native", "AI", "Web3"],
      githubLink: "https://github.com/bluntbrain/SuiSage-AI-Powered-Web3-Portfolio-Assistant",
      videoDemo: "/videos/suidemo.mp4",
      techStack: ["React Native", "OpenAI API", "Gemini API", "AI Chaining", "Voice Synthesis", "Sui Blockchain", "Portfolio Analytics"],
    },
    {
      title: "Swipable News Headlines App (React Native)",
      description: "This React Native app fetches and displays the top news headlines, allowing users to refresh the list, pin their favorite headlines, and delete the ones they're not interested in. It uses local storage to cache headlines for offline access and introduces new headlines at specified intervals.",
      tags: ["React Native", "News"],
      githubLink: "https://github.com/bluntbrain/swipeable-news-app",
      videoDemo: "/videos/newsdemo.mp4",
      techStack: ["React Native", "AsyncStorage", "Gesture Handler"],
    },
    {
      title: "Location-based Chat Application (React Native)",
      description: "This is a location-based chat application built with React Native. It allows users to see other users on a map and start a chat conversation by selecting a user marker on the map. Technologies Used: React Native, React Context API, Mapbox, React Native Gifted Chat",
      tags: ["React Native", "Chat"],
      githubLink: "https://github.com/bluntbrain/react-native-messenger-library",
      videoDemo: "/videos/locationdemo.mp4",
      techStack: ["React Native", "Mapbox", "React Context API", "Gifted Chat"],
    },
  ];

  const skills = [
    "Next.js & React Server Components",
    "React Native Mobile Development",
    "TypeScript & JavaScript",
    "State Management (Redux, Zustand)",
    "Performance Optimization",
    "Responsive Design",
    "Animation & Gestures",
    "SEO & Web Vitals",
    "Testing (Jest, React Testing Library)",
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
    <div className="space-y-6">
      <motion.button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        whileHover={{ x: -5 }}
      >
        <ArrowLeft size={20} />
        Back to Overview
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
            <div key={index} className={project.videoDemo ? "lg:col-span-2" : ""}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-zinc-800 rounded-xl p-6 border border-zinc-700 ${
                  project.videoDemo ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : ""
                }`}
              >
                <div>
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
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline flex items-center gap-1 text-sm"
                      >
                        <ExternalLink size={14} />
                        Play Store
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
                </div>
                
                {project.screenshot && (
                  <div className="flex items-center justify-center">
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-transform hover:scale-105"
                    >
                      <img
                        src={project.screenshot}
                        alt={`${project.title} screenshot`}
                        className="w-full max-w-xs rounded-lg shadow-lg cursor-pointer"
                      />
                    </a>
                  </div>
                )}
                
                {project.videoDemo && (
                  <div className="flex items-center justify-center">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full max-w-xs rounded-lg shadow-lg"
                    >
                      <source src={project.videoDemo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}