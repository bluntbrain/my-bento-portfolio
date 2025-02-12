import React from "react";
import { Card } from "../ui/card";
import { ExternalLink, Github } from "lucide-react";

export function Rust() {
  const rustProjects = [
    {
      title: "Rust CLI Task Manager",
      description:
        "A command-line task management application built with Rust. Features include task creation, deletion, status updates, and persistent storage using SQLite. Demonstrates proficiency in Rust's ownership system, error handling, and third-party crate integration.",
      tags: ["Rust", "CLI"],
      githubLink: "https://github.com/your-username/rust-task-manager",
    },
    {
      title: "Rust Image Processing WASM",
      description:
        "A WebAssembly-powered image processing library written in Rust. Implements various image filters and transformations with high performance. Showcases Rust's zero-cost abstractions and seamless WebAssembly integration.",
      tags: ["Rust", "WebAssembly"],
      githubLink: "https://github.com/your-username/rust-image-wasm",
    },
  ];

  return (
    <Card
      className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900 p-6"
      variant="rust"
    >
      <div className="relative z-20">
        <h2 className="text-2xl font-bold mb-6">Rust Experience 🦀</h2>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 border border-zinc-700">
            <h3 className="font-semibold text-lg mb-4">
              Technical Proficiencies
            </h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-400">
              <li>Memory Safety & Ownership System</li>
              <li>Concurrent & Parallel Programming</li>
              <li>Zero-cost Abstractions</li>
              <li>Error Handling & Result Types</li>
              <li>WebAssembly Integration</li>
            </ul>
          </div>

          <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 border border-zinc-700">
            <h3 className="font-semibold text-lg mb-4">Certifications</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Certified Rust developer with strong focus on systems programming
              and performance optimization. Completed advanced certifications by
              Nathan Stocks covering both foundational and intermediate
              concepts.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.udemy.com/certificate/UC-144bbd90-4f91-4b5a-a1f0-2b26b3d507aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={14} />
                <span>Ultimate Rust Crash Course</span>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-c839d9fd-bd30-458d-b431-0213c2cc8c3f/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={14} />
                <span>Rust Intermediate Concepts</span>
              </a>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <h3 className="text-xl font-bold mb-4">Rust Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {rustProjects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 relative min-h-[200px] border border-zinc-700"
            >
              <div className="absolute top-1 right-1 flex gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2 py-1 ${
                      tag === "Rust"
                        ? "bg-orange-400/10 text-orange-400"
                        : "bg-blue-400/10 text-blue-400"
                    } rounded-full text-xs`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-orange-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="absolute bottom-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1 text-sm"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
