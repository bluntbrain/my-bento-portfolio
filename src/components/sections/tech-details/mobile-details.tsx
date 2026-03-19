"use client";

import React, { useState } from "react";
import { Card } from "../../ui/card";
import { Github, ArrowLeft, Play, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SkillRadial } from "../../ui/skill-radial";
import Image from "next/image";

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
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false, type: null, src: "", title: "",
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
      description: "Led the end-to-end development of India's first neobank designed for couples. Acquired 10,000+ users within 2 months post-launch.",
      tags: ["React Native", "Fintech", "Neobank"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.couplapp",
      videoDemo: "/videos/couple_demo.mp4",
      techStack: ["React Native", "Redux", "Firebase", "Stripe"],
    },
    {
      title: "SuiSage",
      description: "AI-powered Web3 portfolio assistant that chains multiple AI models for superior analysis. Features voice responses with 30+ voices and multi-network Sui support.",
      tags: ["React Native", "AI", "Web3"],
      githubLink: "https://github.com/bluntbrain/SuiSage-AI-Powered-Web3-Portfolio-Assistant",
      videoDemo: "/videos/suidemo.mp4",
      techStack: ["React Native", "OpenAI API", "Gemini API", "Sui Blockchain"],
    },
    {
      title: "Location-based Chat",
      description: "A location-based chat application that allows users to see others on a map and start conversations by selecting a user marker.",
      tags: ["React Native", "Chat", "Location"],
      githubLink: "https://github.com/bluntbrain/react-native-messenger-library",
      videoDemo: "/videos/locationdemo.mp4",
      techStack: ["React Native", "Mapbox", "Gifted Chat"],
    },
    {
      title: "Swipable News Headlines",
      description: "Fetches and displays top news headlines with swipe gestures to pin favorites or delete uninteresting ones.",
      tags: ["React Native", "News", "Gestures"],
      githubLink: "https://github.com/bluntbrain/swipeable-news-app",
      videoDemo: "/videos/newsdemo.mp4",
      techStack: ["React Native", "Gesture Handler", "News API"],
    },
  ];

  const skills = [
    { name: "React Native", level: 95, color: "text-gh-200", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/></svg> },
    { name: "iOS", level: 80, color: "text-gh-200", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> },
    { name: "Android", level: 82, color: "text-gh-200", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10z"/></svg> },
    { name: "TypeScript", level: 90, color: "text-gh-200", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg> },
    { name: "Redux", level: 88, color: "text-gh-200", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M16.63 16.56c.83-.09 1.46-.82 1.41-1.66a1.57 1.57 0 0 0-1.57-1.48h-.05c-.87.03-1.55.75-1.52 1.62.02.44.19.82.47 1.09-1 1.97-2.51 3.42-4.78 4.63-1.54.82-3.14 1.12-4.74.92-1.31-.16-2.34-.73-3-1.65-1-1.38-1.09-2.87-.29-4.37.57-1.07 1.46-1.86 2.04-2.28-.11-.39-.29-1.05-.38-1.54-4.41 3.2-3.96 7.52-2.65 9.33.97 1.35 2.95 2.19 5.13 2.19.56 0 1.13-.05 1.7-.15 3.62-.65 6.36-2.91 7.86-5.65h.37z"/></svg> },
    { name: "Firebase", level: 85, color: "text-gh-200", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M3.89 15.67L6.22 2.47c.04-.24.35-.32.5-.13l2.48 2.96-5.31 10.37zm16.23 2.39l-1.91-11.86c-.04-.24-.28-.37-.48-.25l-13.86 8.3 7.04 4.03c.35.2.78.2 1.13 0l8.08-4.62v.4z"/></svg> },
    { name: "Expo", level: 85, color: "text-gh-200", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/></svg> },
    { name: "Animations", level: 88, color: "text-gh-200", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"/></svg> },
    { name: "Navigation", level: 90, color: "text-gh-200", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg> },
    { name: "Git", level: 88, color: "text-gh-200", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M21.62 11.11l-8.73-8.73a1.3 1.3 0 0 0-1.84 0L9.23 4.2l2.33 2.33a1.54 1.54 0 0 1 1.96 1.96l2.24 2.24a1.54 1.54 0 1 1-.92.86l-2.09-2.09v5.5a1.54 1.54 0 1 1-1.27-.05V9.36a1.54 1.54 0 0 1-.84-2.02L8.33 5.03 2.38 11a1.3 1.3 0 0 0 0 1.84l8.73 8.73a1.3 1.3 0 0 0 1.84 0l8.67-8.67a1.3 1.3 0 0 0 0-1.84v.05z"/></svg> },
  ];

  const experience = [
    { company: "Coupl", role: "Lead Mobile Developer", period: "2023 – 2024", achievements: ["Led end-to-end development of India's first neobank for couples", "Acquired 10,000+ users within 2 months of launch", "Implemented secure payment integrations and KYC flows"] },
    { company: "Jar App", role: "Frontend Team Lead", period: "Feb 2022 – Feb 2023", achievements: ["Led mobile development team and mentored junior developers", "Improved app performance by 60% through optimization", "Implemented CI/CD pipelines reducing deployment time by 70%"] },
    { company: "Fleek", role: "Mobile Developer", period: "Jan 2020 – Feb 2022", achievements: ["Developed flagship React Native app with complex animations", "Reduced app bundle size by 45% through code splitting", "Built custom native modules for enhanced functionality"] },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <motion.button
        onClick={onBack}
        className="mb-4 flex items-center gap-2 px-3 py-1.5 text-gh-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] rounded-lg transition-colors text-sm"
        whileHover={{ x: -3 }}
      >
        <ArrowLeft size={16} />
        Back to Overview
      </motion.button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-white">Mobile Development</h1>
        <p className="text-gh-400 text-sm">Cross-platform mobile development with React Native, Android, and iOS</p>
      </motion.div>

      {/* Skills */}
      <Card className="p-5">
        <h2 className="font-medium text-gh-500 text-xs uppercase tracking-wider mb-4">Technical Skills</h2>
        <SkillRadial skills={skills} />
      </Card>

      {/* Experience */}
      <Card className="p-5">
        <h2 className="font-medium text-gh-500 text-xs uppercase tracking-wider mb-4">Mobile Experience</h2>
        <div className="space-y-3">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.06]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <div>
                  <h3 className="font-medium text-sm text-white">{exp.role}</h3>
                  <p className="text-gh-400 text-sm">{exp.company}</p>
                </div>
                <span className="text-gh-500 text-xs">{exp.period}</span>
              </div>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gh-400 text-sm flex items-start gap-2">
                    <span className="text-gh-600 mt-0.5">·</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Projects */}
      <Card className="p-5">
        <h2 className="font-medium text-gh-500 text-xs uppercase tracking-wider mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mobileProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-white/[0.1] transition-colors overflow-hidden"
            >
              {(project.screenshot || project.videoDemo) && (
                <div className="relative flex justify-center py-3 bg-black/30">
                  <div
                    className="relative rounded-xl overflow-hidden border border-white/[0.06] cursor-pointer group"
                    onClick={() => {
                      if (project.videoDemo) openLightbox("video", project.videoDemo, project.title);
                      else if (project.screenshot) openLightbox("image", project.screenshot, project.title);
                    }}
                  >
                    {project.videoDemo ? (
                      <video autoPlay loop muted playsInline className="h-64 w-auto object-cover">
                        <source src={project.videoDemo} type="video/mp4" />
                      </video>
                    ) : project.screenshot ? (
                      <Image src={project.screenshot} alt={`${project.title} screenshot`} width={200} height={400} className="h-64 w-auto object-cover" />
                    ) : null}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              )}

              <div className="p-4">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white/[0.06] text-gh-400 rounded-md text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <h3 className="font-medium text-sm text-white mb-1">{project.title}</h3>
                <p className="text-gh-400 text-sm mb-3 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs text-gh-500 bg-white/[0.04] px-1.5 py-0.5 rounded-md">{tech}</span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs text-gh-500">+{project.techStack.length - 3}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.playStoreLink && (
                    <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] text-gh-300 rounded-lg text-xs font-medium transition-colors">
                      <Play size={12} /> Play Store
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] text-gh-300 rounded-lg text-xs font-medium transition-colors">
                      <Github size={12} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeLightbox}>
            <button onClick={closeLightbox} aria-label="Close lightbox" className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
              <X className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
            <div className="absolute top-4 left-4 z-50">
              <h3 className="text-white text-lg font-semibold">{lightbox.title}</h3>
            </div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative max-h-[85vh] max-w-[400px] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl" onClick={(e) => e.stopPropagation()}>
              {lightbox.type === "video" ? (
                <video autoPlay loop muted playsInline controls className="max-h-[85vh] w-auto object-contain">
                  <source src={lightbox.src} type="video/mp4" />
                </video>
              ) : (
                <Image src={lightbox.src} alt={lightbox.title} width={400} height={800} className="max-h-[85vh] w-auto object-contain" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
