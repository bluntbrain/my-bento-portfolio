"use client";

import React from "react";
import { Card } from "../../ui/card";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { SkillRadial } from "../../ui/skill-radial";
import Image from "next/image";

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

  // skills with icons and proficiency levels
  const skills = [
    {
      name: "React",
      level: 95,
      color: "text-cyan-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1.5c3.5 0 6.5-1.5 8-3.5-1.5-2-4.5-3.5-8-3.5S5.5 9.5 4 11.5c1.5 2 4.5 3.5 8 3.5z"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
        </svg>
      ),
    },
    {
      name: "Next.js",
      level: 90,
      color: "text-white",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4.5l6 7.5c-1.5.6-3.1 1-4.9 1-.4 0-.7 0-1.1-.1V17zm7.5-2.5L11 5.5V7h2v6l5.5 6.5c.3-.9.5-1.9.5-3v-.5-.5z"/>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      level: 90,
      color: "text-blue-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M3 3h18v18H3V3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8zM14 12h-3v6h1.5v-4.5h1.5V12zm-7-1h6v1.5H9.5V18H8v-5.5H5V11h2z"/>
        </svg>
      ),
    },
    {
      name: "JavaScript",
      level: 95,
      color: "text-yellow-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M3 3h18v18H3V3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7v5.74c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83zm5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"/>
        </svg>
      ),
    },
    {
      name: "Tailwind",
      level: 92,
      color: "text-cyan-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
        </svg>
      ),
    },
    {
      name: "Redux",
      level: 85,
      color: "text-purple-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M16.63 16.56c.83-.09 1.46-.82 1.41-1.66a1.57 1.57 0 0 0-1.57-1.48h-.05c-.87.03-1.55.75-1.52 1.62.02.44.19.82.47 1.09-1 1.97-2.51 3.42-4.78 4.63-1.54.82-3.14 1.12-4.74.92-1.31-.16-2.34-.73-3-1.65-1-1.38-1.09-2.87-.29-4.37.57-1.07 1.46-1.86 2.04-2.28-.11-.39-.29-1.05-.38-1.54-4.41 3.2-3.96 7.52-2.65 9.33.97 1.35 2.95 2.19 5.13 2.19.56 0 1.13-.05 1.7-.15 3.62-.65 6.36-2.91 7.86-5.65h.37zm4.11-4.17c-2.32-2.72-5.74-4.22-9.64-4.22h-.5a1.55 1.55 0 0 0-1.38-.85h-.05c-.87.03-1.55.75-1.52 1.62.03.86.75 1.54 1.62 1.51h.05a1.57 1.57 0 0 0 1.35-.99h.55c2.33 0 4.53.68 6.53 2.01 1.53 1.02 2.63 2.34 3.24 3.92.52 1.3.5 2.58-.07 3.66-.87 1.65-2.33 2.55-4.26 2.55-1.24 0-2.43-.38-3.05-.64-.31.27-.86.72-1.24.99 1.2.55 2.43.84 3.61.84 2.69 0 4.68-1.49 5.45-2.98 1.02-2.04.99-5.35-2.7-8.42zM6.86 14.39c.03.86.75 1.54 1.62 1.51h.05a1.57 1.57 0 0 0 1.52-1.62 1.57 1.57 0 0 0-1.57-1.48h-.05c-.06 0-.14 0-.21.02-.98-1.64-1.39-3.43-1.24-5.36.11-1.44.57-2.69 1.39-3.72.67-.85 1.97-1.27 2.84-1.3 2.44-.04 3.48 3 3.55 4.22.39.09 1.05.29 1.51.44-.22-3.66-2.05-5.73-4.9-5.73-2.68 0-5.19 1.95-6.17 4.83-.66 1.92-.58 3.78.22 5.55.57 1.25 1.48 2.31 2.02 2.9-.15.19-.22.44-.2.74h-.38z"/>
        </svg>
      ),
    },
    {
      name: "Node.js",
      level: 80,
      color: "text-green-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.27 1.04.27 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2h.06zm0 2.75L18 8.05v7.9l-6 3.45-6-3.45v-7.9l6-3.45z"/>
        </svg>
      ),
    },
    {
      name: "Git",
      level: 88,
      color: "text-orange-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M21.62 11.11l-8.73-8.73a1.3 1.3 0 0 0-1.84 0L9.23 4.2l2.33 2.33a1.54 1.54 0 0 1 1.96 1.96l2.24 2.24a1.54 1.54 0 1 1-.92.86l-2.09-2.09v5.5a1.54 1.54 0 1 1-1.27-.05V9.36a1.54 1.54 0 0 1-.84-2.02L8.33 5.03 2.38 11a1.3 1.3 0 0 0 0 1.84l8.73 8.73a1.3 1.3 0 0 0 1.84 0l8.67-8.67a1.3 1.3 0 0 0 0-1.84v.05z"/>
        </svg>
      ),
    },
    {
      name: "GraphQL",
      level: 75,
      color: "text-pink-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12.48 2.63l7.45 4.3v8.6l-7.45 4.3-7.45-4.3v-8.6l7.45-4.3m0-1.73L3.6 6.2v9.6l8.88 5.13 8.88-5.13V6.2L12.48.9z"/>
          <circle cx="12.48" cy="2.63" r="1.8"/>
          <circle cx="19.93" cy="6.93" r="1.8"/>
          <circle cx="19.93" cy="15.53" r="1.8"/>
          <circle cx="12.48" cy="19.83" r="1.8"/>
          <circle cx="5.03" cy="15.53" r="1.8"/>
          <circle cx="5.03" cy="6.93" r="1.8"/>
        </svg>
      ),
    },
    {
      name: "Jest",
      level: 78,
      color: "text-red-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M22.25 11.85c-.33-.98-1.05-1.68-2.03-2.03.23-.66.3-1.35.2-2.05-.15-1.05-.66-1.93-1.48-2.55a4.1 4.1 0 0 0-2.55-.91c-.4 0-.8.05-1.2.15-.25-.65-.63-1.2-1.15-1.65a4.15 4.15 0 0 0-2.68-1c-.95 0-1.88.33-2.68 1-.53.45-.9 1-1.15 1.65-.4-.1-.8-.15-1.2-.15-.9 0-1.78.3-2.55.91-.83.62-1.33 1.5-1.48 2.55-.1.7-.03 1.4.2 2.05-.98.35-1.7 1.05-2.03 2.03-.33.98-.28 2.03.15 2.98.43.95 1.2 1.65 2.18 1.98-.08.43-.1.85-.08 1.28.08 1.05.5 2 1.25 2.7a4.1 4.1 0 0 0 2.93 1.18h.38c.5.8 1.18 1.43 2.03 1.83a4.4 4.4 0 0 0 2.03.5c.7 0 1.38-.18 2.03-.5.85-.4 1.53-1.03 2.03-1.83h.38c1.08 0 2.13-.4 2.93-1.18a4.12 4.12 0 0 0 1.25-2.7c.03-.43 0-.85-.08-1.28.98-.33 1.75-1.03 2.18-1.98.43-.95.48-2 .15-2.98zM12 17.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
        </svg>
      ),
    },
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
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Frontend Development
        </h1>
        <p className="text-gh-300 text-base sm:text-lg">
          Modern web development with Next.js, React.js, and cutting-edge technologies
        </p>
      </motion.div>

      {/* Skills */}
      <Card className="bg-gh-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Technical Skills</h2>
        <SkillRadial skills={skills} />
      </Card>

      {/* Experience */}
      <Card className="bg-gh-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Frontend Experience</h2>
        <div className="space-y-4 sm:space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gh-800 p-4 sm:p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white">{exp.role}</h3>
                  <p className="text-accent text-sm sm:text-base">{exp.company}</p>
                </div>
                <span className="text-gh-400 text-sm">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 sm:space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gh-300 text-sm">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Projects */}
      <Card className="bg-gh-900 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {frontendProjects.map((project, index) => (
            <div key={index} className={project.videoDemo ? "lg:col-span-2" : ""}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gh-800 rounded-xl p-4 sm:p-6 border border-gh-700 ${
                  project.videoDemo ? "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6" : ""
                }`}
              >
                <div>
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
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1 text-sm"
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
                        className="text-secondary hover:underline flex items-center gap-1 text-sm"
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
                      <Image
                        src={project.screenshot}
                        alt={`${project.title} screenshot`}
                        width={320}
                        height={640}
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