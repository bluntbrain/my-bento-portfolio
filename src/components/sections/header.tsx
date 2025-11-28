"use client";

import React from "react";
import Image from "next/image";
import ProfileImage from "@/assets/images/newdp.png";
import { Card } from "../ui/card";
import { Smartphone, Code2 } from "lucide-react";

export function Header() {
  return (
    <>
      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900">
        <div className="p-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Hi, I&apos;m Ishan
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            <span className="text-white font-bold">
              Mobile App Developer
            </span>{" "}
            &{" "}
            <span className="text-white font-bold">
              Rust Protocol Engineer
            </span>{" "}
            with <span className="text-white font-bold">6+ years</span>{" "}
            of experience building apps scaling to{" "}
            <span className="text-white font-bold">10M+ users</span>{" "}
            and secure{" "}
            <span className="text-white font-bold">
              Solana smart contracts
            </span>
            .
          </p>
        </div>
      </Card>

      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 p-0 aspect-square bg-zinc-900">
        <Image
          src={ProfileImage}
          alt="Ishan"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover rounded-xl"
        />
      </Card>

      <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-zinc-900 p-4">
        <div className="space-y-4">
          {/* mobile section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Smartphone size={18} className="text-accent" />
              <h3 className="font-semibold text-accent">Mobile & Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "React Native", primary: true },
                { name: "Expo", primary: true },
                { name: "Next.js", primary: true },
                { name: "React.js", primary: true },
                { name: "TypeScript", primary: true },
                { name: "Push Notifications", primary: false },
                { name: "App Store", primary: false },
                { name: "Play Store", primary: false },
                { name: "TailwindCSS", primary: false },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all hover:scale-105 cursor-default ${
                    skill.primary
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : "bg-zinc-800 text-gray-300 border border-zinc-700"
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* rust/blockchain section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Code2 size={18} className="text-primary" />
              <h3 className="font-semibold text-primary">Rust & Blockchain</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Rust", primary: true },
                { name: "Solana", primary: true },
                { name: "Anchor", primary: true },
                { name: "Pinocchio", primary: true },
                { name: "Solidity", primary: true },
                { name: "Foundry", primary: false },
                { name: "Smart Contracts", primary: false },
                { name: "DeFi", primary: false },
                { name: "Web3.js", primary: false },
                { name: "Ethers.js", primary: false },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all hover:scale-105 cursor-default ${
                    skill.primary
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "bg-zinc-800 text-gray-300 border border-zinc-700"
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
