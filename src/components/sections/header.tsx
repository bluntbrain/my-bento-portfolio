"use client";

import React from "react";
import Image from "next/image";
import ProfileImage from "@/assets/images/face.jpeg";
import { SkillSet } from "../ui/skill-set";
import { Card } from "../ui/card";

export function Header() {
  return (
    <>
      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Hi, I&apos;m Ishan
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Senior Software Engineer with 5+ years of experience in leading teams
          and developing high-quality applications using React.js, React Native
          & Node.js.
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

      <Card className="col-span-1 sm:col-span-2 lg:col-span-2 py-2 px-4 bg-zinc-900">
        <h2 className="text-xl sm:text-2xl font-bold mt-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <SkillSet
            title="Blockchain"
            skills={[
              "Foundry",
              "Solidity",
              "DeFi",
              "Hardhat",
              "Web3.js",
              "Ethers.js",
            ]}
          />
          <SkillSet
            title="Frontend"
            skills={[
              "React.js",
              "React Native",
              "Next.js",
              "Redux",
              "Android (Java)",
              "iOS (Swift)",
            ]}
          />
          <SkillSet
            title="Backend"
            skills={["Rust", "GO", "Node.js", "MongoDB", "Heroku", "AWS"]}
          />

          <SkillSet
            title="Tools"
            skills={[
              "Git",
              "Figma",
              "Amplitude",
              "Clevertap",
              "Sentry",
              "Codepush",
            ]}
          />
        </div>
      </Card>
    </>
  );
}
