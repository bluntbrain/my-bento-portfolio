import React from "react";
import { Card } from "../ui/card";
import { ExternalLink, Github } from "lucide-react";

export function FrontendSection() {
  const frontendProjects = [
    {
      title: "Next.js Movie Ballot App",
      description:
        "A modern web application for movie voting and reviews. Built with Next.js 14, Server Actions, and Prisma for optimal performance and user experience.",
      tags: ["Next.js", "TypeScript"],
      githubLink: "https://github.com/your-username/movie-ballot",
      liveLink: "https://movie-ballot.vercel.app",
    },
    {
      title: "Coupl App",
      description:
        "A React Native application for couples to share moments and plan activities together. Features real-time chat, shared calendar, and photo sharing.",
      tags: ["React Native", "Firebase"],
      githubLink: "https://github.com/your-username/coupl-app",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.couplapp",
    },
    {
      title: "Cryo Circuit App",
      description:
        "Fitness tracking application built with React Native. Includes workout planning, progress tracking, and social features.",
      tags: ["React Native", "Redux"],
      githubLink: "https://github.com/your-username/cryo-circuit",
    },
    {
      title: "Swipable News Headlines",
      description:
        "React Native app featuring swipeable news cards with gesture animations and real-time updates.",
      tags: ["React Native", "Animations"],
      githubLink: "https://github.com/your-username/swipable-news",
    },
  ];

  const expertise = [
    "Next.js & React Server Components",
    "React Native Mobile Development",
    "TypeScript & JavaScript",
    "State Management (Redux, Zustand)",
    "Performance Optimization",
    "Responsive Design",
    "Animation & Gestures",
    "Testing (Jest, React Testing Library)",
  ];

  return (
    <Card
      className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900 p-6"
      variant="frontend"
    >
      <div className="relative z-20">
        <h2 className="text-2xl font-bold mb-6">Frontend Development 🚀</h2>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 border border-zinc-700">
            <h3 className="font-semibold text-lg mb-4">Technical Expertise</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-gray-400">
              {expertise.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-blue-400">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 border border-zinc-700">
            <h3 className="font-semibold text-lg mb-4">
              Experience Highlights
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              <span className="text-yellow-400 font-semibold">5+ years</span> of
              experience in{" "}
              <span className="text-blue-400 font-semibold">
                frontend development
              </span>
              , specializing in{" "}
              <span className="text-green-400 font-semibold">
                React ecosystem
              </span>
              . Led multiple successful projects from concept to deployment,
              with a focus on{" "}
              <span className="text-blue-400 font-semibold">performance</span>{" "}
              and{" "}
              <span className="text-blue-400 font-semibold">
                user experience
              </span>
              .
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/bluntbrain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                <Github size={14} />
                <span>View More Projects</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ishanl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={14} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {frontendProjects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 relative min-h-[200px] border border-zinc-700"
            >
              <div className="absolute top-1 right-1 flex gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="absolute bottom-4 flex gap-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1 text-sm"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
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
                    <span>Play Store</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
