import React from "react";
import { Card } from "../ui/card";
import { Github } from "lucide-react";

export function RustProjects() {
  return (
    <>
      {/* Rust Project 1 */}
      <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-zinc-900 p-6 relative min-h-[240px]">
        <div className="absolute top-1 right-1 flex gap-2">
          <span className="px-2 py-1 bg-orange-400/10 text-orange-400 rounded-full text-xs">
            Rust
          </span>
          <span className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs">
            CLI
          </span>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-orange-400">
            Rust CLI Task Manager
          </h3>
          <p className="text-gray-400 mb-4">
            A command-line task management application built with Rust. Features
            include task creation, deletion, status updates, and persistent
            storage using SQLite. Demonstrates proficiency in Rust&apos;s
            ownership system, error handling, and third-party crate integration.
          </p>
        </div>
        <div className="absolute bottom-1">
          <a
            href="https://github.com/bluntbrain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </Card>

      {/* Rust Project 2 */}
      <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-zinc-900 p-6 relative min-h-[240px]">
        <div className="absolute top-1 right-1 flex gap-2">
          <span className="px-2 py-1 bg-orange-400/10 text-orange-400 rounded-full text-xs">
            Rust
          </span>
          <span className="px-2 py-1 bg-purple-400/10 text-purple-400 rounded-full text-xs">
            WebAssembly
          </span>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-orange-400">
            Rust Image Processing WASM
          </h3>
          <p className="text-gray-400 mb-4">
            A WebAssembly-powered image processing library written in Rust.
            Implements various image filters and transformations with high
            performance. Showcases Rust&apos;s zero-cost abstractions and
            seamless WebAssembly integration.
          </p>
        </div>
        <div className="absolute bottom-1">
          <a
            href="https://github.com/bluntbrain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </Card>
    </>
  );
}
