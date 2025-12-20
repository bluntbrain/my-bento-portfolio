"use client";

import React, { useState } from "react";
import { Card } from "../../ui/card";
import { Github, ArrowLeft, Play, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SkillRadial } from "../../ui/skill-radial";
import Image from "next/image";

// lightbox state type
interface LightboxState {
  isOpen: boolean;
  type: "image" | "video" | null;
  src: string;
  title: string;
}

interface MobileDetailsProps {
  onBack: () => void;
}

export function MobileDetails({ onBack }: MobileDetailsProps) {
  // lightbox state for fullscreen view
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    type: null,
    src: "",
    title: "",
  });

  const openLightbox = (type: "image" | "video", src: string, title: string) => {
    setLightbox({ isOpen: true, type, src, title });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, type: null, src: "", title: "" });
  };

  const mobileProjects = [
    {
      title: "Jar App",
      description: "Worked as Frontend Team Lead on this savings and investment app. Improved app performance by 60% through optimization techniques and implemented CI/CD pipelines.",
      tags: ["React Native", "Fintech", "Investment"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.jar.app",
      screenshot: "/images/jardemo.png",
      techStack: ["React Native", "Redux", "Performance Optimization", "CI/CD"],
    },
    {
      title: "Coupl App",
      description: "Led the end-to-end development of India's first neobank designed for couples. Successfully acquired more than 10,000 users within 2 months post-launch. Features joint wallet and linked cards for shared expenses.",
      tags: ["React Native", "Fintech", "Neobank"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.couplapp",
      videoDemo: "/videos/couple_demo.mp4",
      techStack: ["React Native", "Redux", "Firebase", "Stripe", "Push Notifications"],
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
      title: "Location-based Chat Application",
      description: "A location-based chat application built with React Native. It allows users to see other users on a map and start a chat conversation by selecting a user marker on the map.",
      tags: ["React Native", "Chat", "Location"],
      githubLink: "https://github.com/bluntbrain/react-native-messenger-library",
      videoDemo: "/videos/locationdemo.mp4",
      techStack: ["React Native", "Mapbox", "React Native Gifted Chat", "Geolocation"],
    },
    {
      title: "Swipable News Headlines App",
      description: "This React Native app fetches and displays the top news headlines, allowing users to refresh the list, pin their favorite headlines, and delete the ones they're not interested in with swipe gestures.",
      tags: ["React Native", "News", "Gestures"],
      githubLink: "https://github.com/bluntbrain/swipeable-news-app",
      videoDemo: "/videos/newsdemo.mp4",
      techStack: ["React Native", "Gesture Handler", "AsyncStorage", "News API"],
    },
  ];

  // skills with icons and proficiency levels
  const skills = [
    {
      name: "React Native",
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
      name: "iOS",
      level: 80,
      color: "text-white",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
    },
    {
      name: "Android",
      level: 82,
      color: "text-green-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
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
      name: "Redux",
      level: 88,
      color: "text-purple-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M16.63 16.56c.83-.09 1.46-.82 1.41-1.66a1.57 1.57 0 0 0-1.57-1.48h-.05c-.87.03-1.55.75-1.52 1.62.02.44.19.82.47 1.09-1 1.97-2.51 3.42-4.78 4.63-1.54.82-3.14 1.12-4.74.92-1.31-.16-2.34-.73-3-1.65-1-1.38-1.09-2.87-.29-4.37.57-1.07 1.46-1.86 2.04-2.28-.11-.39-.29-1.05-.38-1.54-4.41 3.2-3.96 7.52-2.65 9.33.97 1.35 2.95 2.19 5.13 2.19.56 0 1.13-.05 1.7-.15 3.62-.65 6.36-2.91 7.86-5.65h.37zm4.11-4.17c-2.32-2.72-5.74-4.22-9.64-4.22h-.5a1.55 1.55 0 0 0-1.38-.85h-.05c-.87.03-1.55.75-1.52 1.62.03.86.75 1.54 1.62 1.51h.05a1.57 1.57 0 0 0 1.35-.99h.55c2.33 0 4.53.68 6.53 2.01 1.53 1.02 2.63 2.34 3.24 3.92.52 1.3.5 2.58-.07 3.66-.87 1.65-2.33 2.55-4.26 2.55-1.24 0-2.43-.38-3.05-.64-.31.27-.86.72-1.24.99 1.2.55 2.43.84 3.61.84 2.69 0 4.68-1.49 5.45-2.98 1.02-2.04.99-5.35-2.7-8.42zM6.86 14.39c.03.86.75 1.54 1.62 1.51h.05a1.57 1.57 0 0 0 1.52-1.62 1.57 1.57 0 0 0-1.57-1.48h-.05c-.06 0-.14 0-.21.02-.98-1.64-1.39-3.43-1.24-5.36.11-1.44.57-2.69 1.39-3.72.67-.85 1.97-1.27 2.84-1.3 2.44-.04 3.48 3 3.55 4.22.39.09 1.05.29 1.51.44-.22-3.66-2.05-5.73-4.9-5.73-2.68 0-5.19 1.95-6.17 4.83-.66 1.92-.58 3.78.22 5.55.57 1.25 1.48 2.31 2.02 2.9-.15.19-.22.44-.2.74h-.38z"/>
        </svg>
      ),
    },
    {
      name: "Firebase",
      level: 85,
      color: "text-yellow-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M3.89 15.67L6.22 2.47c.04-.24.35-.32.5-.13l2.48 2.96-5.31 10.37zm16.23 2.39l-1.91-11.86c-.04-.24-.28-.37-.48-.25l-13.86 8.3 7.04 4.03c.35.2.78.2 1.13 0l8.08-4.62v.4zM9.91 7.59l2.91 5.67L6.6 5.87c-.14-.18-.42-.14-.5.08L4.26 12.9l5.65-5.31zm5.14-.19l.94-4.48c.07-.28.44-.33.58-.08l3.54 6.95-5.06-2.39z"/>
        </svg>
      ),
    },
    {
      name: "Expo",
      level: 85,
      color: "text-white",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
    },
    {
      name: "Animations",
      level: 88,
      color: "text-pink-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"/>
        </svg>
      ),
    },
    {
      name: "Navigation",
      level: 90,
      color: "text-blue-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
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
  ];

  const experience = [
    {
      company: "Coupl",
      role: "Lead Mobile Developer",
      period: "2023 - 2024",
      achievements: [
        "Led end-to-end development of India's first neobank for couples",
        "Acquired 10,000+ users within 2 months of launch",
        "Implemented secure payment integrations and KYC flows",
        "Built real-time transaction tracking and notifications",
      ],
    },
    {
      company: "Jar App",
      role: "Frontend Team Lead",
      period: "February 2022 - February 2023",
      achievements: [
        "Led the mobile development team and mentored junior developers",
        "Improved app performance by 60% through optimization techniques",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Built features for savings, investments, and gold purchases",
      ],
    },
    {
      company: "Fleek",
      role: "Mobile Developer",
      period: "January 2020 - February 2022",
      achievements: [
        "Developed flagship React Native app with complex animations",
        "Reduced app bundle size by 45% through code splitting and lazy loading",
        "Implemented offline-first architecture with data synchronization",
        "Built custom native modules for enhanced functionality",
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
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Mobile Development
        </h1>
        <p className="text-gh-300 text-base sm:text-lg">
          Cross-platform mobile development with React Native, Android, and iOS
        </p>
      </motion.div>

      {/* Skills */}
      <Card className="bg-gh-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">Technical Skills</h2>
        <SkillRadial skills={skills} />
      </Card>

      {/* Experience */}
      <Card className="bg-gh-900 p-4 sm:p-6 mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">Mobile Experience</h2>
        <div className="space-y-4 sm:space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gh-800 p-4 sm:p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white">{exp.role}</h3>
                  <p className="text-primary text-sm sm:text-base">{exp.company}</p>
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
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mobileProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gh-800 rounded-xl border border-gh-700 hover:border-gh-600 transition-colors overflow-hidden"
            >
              {/* video/screenshot in phone frame with click to fullscreen */}
              {(project.screenshot || project.videoDemo) && (
                <div className="relative bg-gh-900 flex justify-center py-4">
                  <div
                    className="relative rounded-2xl overflow-hidden border-4 border-gh-600 shadow-xl cursor-pointer group"
                    onClick={() => {
                      if (project.videoDemo) {
                        openLightbox("video", project.videoDemo, project.title);
                      } else if (project.screenshot) {
                        openLightbox("image", project.screenshot, project.title);
                      }
                    }}
                  >
                    {project.videoDemo ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-72 w-auto object-cover"
                      >
                        <source src={project.videoDemo} type="video/mp4" />
                      </video>
                    ) : project.screenshot ? (
                      <Image
                        src={project.screenshot}
                        alt={`${project.title} screenshot`}
                        width={200}
                        height={400}
                        className="h-72 w-auto object-cover"
                      />
                    ) : null}
                    {/* maximize overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              )}

              {/* content */}
              <div className="p-4">
                {/* tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* title */}
                <h3 className="font-bold text-base mb-1.5 text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-gh-300 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* tech stack */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-gh-400 bg-gh-700 px-1.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs text-gh-400">+{project.techStack.length - 4}</span>
                  )}
                </div>

                {/* action buttons */}
                <div className="flex flex-wrap gap-2">
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 rounded-lg text-xs font-medium transition-colors"
                    >
                      <Play size={12} />
                      Play Store
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg text-xs font-medium transition-colors"
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* lightbox modal for fullscreen view */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            {/* close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 bg-gh-800/80 hover:bg-gh-700 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* title */}
            <div className="absolute top-4 left-4 z-50">
              <h3 className="text-white text-lg font-semibold">{lightbox.title}</h3>
            </div>

            {/* content - vertical phone format */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[85vh] max-w-[400px] rounded-3xl overflow-hidden border-4 border-gh-600 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="max-h-[85vh] w-auto object-contain"
                >
                  <source src={lightbox.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  width={400}
                  height={800}
                  className="max-h-[85vh] w-auto object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}