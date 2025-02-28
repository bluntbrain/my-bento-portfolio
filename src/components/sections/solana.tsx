import React from "react";
import { Card } from "../ui/card";
import { ExternalLink, Github } from "lucide-react";

export function Solana() {
  const solanaProjects = [
    {
      title: "Solana Token Launchpad",
      description:
        "A comprehensive token launchpad built on Solana blockchain. Features include token creation, IDO management, liquidity pool setup, and vesting schedules. The platform enables projects to launch their tokens with customizable parameters and security features.",
      tags: ["Solana", "DeFi", "Launchpad"],
      liveLink: "https://sol.dx.app/",
      techStack: ["Rust", "Anchor", "React", "Solana Program Library"],
    },
    {
      title: "Solana Lending Protocol",
      description:
        "A decentralized lending protocol on Solana allowing users to deposit collateral, borrow assets, and earn interest. Implements risk management features, liquidation mechanisms, and interest rate models optimized for Solana's high throughput.",
      tags: ["Solana", "Lending", "DeFi"],
      githubLink: "https://github.com/bluntbrain/solana-lending-protocol",
      techStack: ["Rust", "Anchor", "TypeScript", "Solana Program Library"],
    },
  ];

  const expertise = [
    "Solana Program Development",
    "Anchor Framework",
    "SPL Token Standards",
    "Cross-Program Invocation",
    "Transaction Optimization",
    "PDAs & Account Management",
    "Solana Web3.js",
    "Phantom & Sollet Integration",
  ];

  return (
    <Card
      className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900 p-6"
      variant="solana"
    >
      <div className="relative z-20">
        <h2 className="text-2xl font-bold mb-6">Solana Development 🌊</h2>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 border border-zinc-700">
            <h3 className="font-semibold text-lg mb-4">
              Technical Proficiencies
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-gray-400">
              {expertise.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-purple-400">▹</span>
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
              <span className="text-yellow-400 font-semibold">2+ years</span> of
              experience in{" "}
              <span className="text-purple-400 font-semibold">
                Solana development
              </span>
              , specializing in{" "}
              <span className="text-green-400 font-semibold">
                DeFi protocols
              </span>{" "}
              and{" "}
              <span className="text-green-400 font-semibold">
                token systems
              </span>
              . Strong focus on{" "}
              <span className="text-purple-400 font-semibold">
                performance optimization
              </span>{" "}
              and{" "}
              <span className="text-purple-400 font-semibold">
                security best practices
              </span>{" "}
              for Solana&apos;s unique architecture.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://solana.com/developers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={14} />
                <span>Solana Developer Resources</span>
              </a>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <h3 className="text-xl font-bold mb-4">Solana Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {solanaProjects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 relative min-h-[240px] border border-zinc-700"
            >
              <div className="absolute top-1 right-1 flex gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2 py-1 ${
                      tag === "Solana"
                        ? "bg-purple-400/10 text-purple-400"
                        : "bg-blue-400/10 text-blue-400"
                    } rounded-full text-xs`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-purple-400">
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
              </div>
              <div className="absolute bottom-4 flex gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>View Project</span>
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
                    <span>GitHub</span>
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
