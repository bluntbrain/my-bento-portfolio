"use client";

import React from "react";
import { Card } from "../../ui/card";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface MobileDetailsProps {
  onBack: () => void;
}

export function MobileDetails({ onBack }: MobileDetailsProps) {
  const mobileProjects = [
    {
      title: "Coupl App",
      description: "Led the end-to-end development of India's first neobank designed for couples. Successfully acquired more than 10,000 users within 2 months post-launch. Features joint wallet and linked cards for shared expenses.",
      tags: ["React Native", "Fintech", "Neobank"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.couplapp",
      techStack: ["React Native", "Redux", "Firebase", "Stripe", "Push Notifications"],
    },
    {
      title: "Swipable News Headlines App",
      description: "This React Native app fetches and displays the top news headlines, allowing users to refresh the list, pin their favorite headlines, and delete the ones they're not interested in with swipe gestures.",
      tags: ["React Native", "News", "Gestures"],
      githubLink: "https://github.com/bluntbrain/swipeable-news-app",
      techStack: ["React Native", "Gesture Handler", "AsyncStorage", "News API"],
    },
    {
      title: "Location-based Chat Application",
      description: "A location-based chat application built with React Native. It allows users to see other users on a map and start a chat conversation by selecting a user marker on the map.",
      tags: ["React Native", "Chat", "Location"],
      githubLink: "https://github.com/bluntbrain/react-native-messenger-library",
      techStack: ["React Native", "Mapbox", "React Native Gifted Chat", "Geolocation"],
    },
    {
      title: "Cryo Circuit Fitness App",
      description: "A comprehensive fitness tracking application with workout planning, progress tracking, and social features. Built with React Native for cross-platform compatibility.",
      tags: ["React Native", "Fitness", "Health"],
      githubLink: "https://github.com/bluntbrain/cryo-circuit-app",
      techStack: ["React Native", "Redux", "SQLite", "Charts", "Camera"],
    },
    {
      title: "Jar App",
      description: "Worked as Frontend Team Lead on this savings and investment app. Improved app performance by 60% through optimization techniques and implemented CI/CD pipelines.",
      tags: ["React Native", "Fintech", "Investment"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.jar",
      techStack: ["React Native", "Redux", "Performance Optimization", "CI/CD"],
    },
  ];

  const skills = [
    "React Native Development",
    "iOS & Android Native Modules",
    "State Management (Redux, Context)",
    "Navigation (React Navigation)",
    "Performance Optimization",
    "Push Notifications",
    "In-App Purchases",
    "App Store & Play Store Deployment",
    "Native Bridge Development",
    "Gesture Handling",
    "Camera & Media Integration",
    "Offline Storage (AsyncStorage, SQLite)",
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            Mobile Development
          </h1>
          <p className="text-gray-400 text-lg">
            Cross-platform mobile development with React Native, Android, and iOS
          </p>
        </motion.div>

        {/* Skills */}
        <Card className="bg-zinc-900 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="bg-zinc-800 p-3 rounded-lg text-center">
                <span className="text-sm text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Experience */}
        <Card className="bg-zinc-900 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-green-400">Mobile Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-white">{exp.role}</h3>
                    <p className="text-green-400">{exp.company}</p>
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
          <h2 className="text-2xl font-bold mb-6 text-green-400">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mobileProjects.map((project, index) => (
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
                      className="px-2 py-1 bg-green-400/10 text-green-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-lg mb-3 text-green-400">
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
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}