"use client";

import React from "react";
import Image from "next/image";
import ProfileImage from "@/assets/images/face.jpeg";
import { SkillSet } from "../ui/skill-set";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

export function Header() {
  return (
    <>
      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Hi, I&apos;m Ishan
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          <span className="text-blue-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          with <span className="text-yellow-400 font-semibold">5+ years</span>{" "}
          of experience in leading teams and developing high-quality
          applications using{" "}
          <span className="text-green-400 font-semibold">Next.js/React.js</span>
          , <span className="text-green-400 font-semibold">React Native</span> &{" "}
          <span className="text-green-400 font-semibold">Nest.js/Node.js</span>.
        </p>
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

      <Card className="col-span-1 sm:col-span-2 lg:col-span-2 p-4 bg-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <div className="space-y-3">
            <SkillSet
              title="Blockchain & Web3"
              skills={[
                { name: "Solidity", level: "expert", highlight: true },
                { name: "Foundry", level: "expert", highlight: true },
                { name: "DeFi", level: "advanced", highlight: true },
                { name: "Hardhat", level: "advanced" },
                { name: "Web3.js", level: "advanced" },
              ]}
            />
            <SkillSet
              title="Frontend"
              skills={[
                { name: "Next.js", level: "expert", highlight: true },
                { name: "React Native", level: "expert", highlight: true },
                { name: "React.js", level: "expert", highlight: true },
                { name: "TypeScript", level: "expert", highlight: true },
                { name: "TailwindCSS", level: "advanced" },
              ]}
            />
            <SkillSet
              title="Backend"
              skills={[
                { name: "Rust", level: "advanced", highlight: true },
                { name: "Node.js", level: "expert", highlight: true },
                { name: "Go", level: "intermediate", highlight: true },
                { name: "PostgreSQL", level: "advanced" },
                { name: "MongoDB", level: "advanced" },
                { name: "GraphQL", level: "intermediate" },
              ]}
            />
          </div>
        </motion.div>
      </Card>
    </>
  );
}
