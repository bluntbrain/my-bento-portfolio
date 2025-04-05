import React, { useState } from "react";
import { Card } from "../ui/card";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function Achievements() {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const hackathons = [
    {
      title: "StarkHack Winner 🏆",
      prize: "$4,000",
      project: "Chain Monsters",
      period: "March 2024",
      description: "An innovative blockchain-based game",
      ethGlobalLink: "https://ethglobal.com/showcase/chain-monsters-o26dw",
      githubLink: "https://github.com/Krane-Apps/chain-monsters",
      tags: ["StarkNet", "Cairo", "Gaming"],
      image: "/images/achievements/starkhack.png",
    },
    {
      title: "SuperHack Winner 🚀",
      prize: "$10,000",
      project: (
        <span className="text-green-400 font-semibold">Repo Reward</span>
      ),
      period: "February 2024",
      description: "A revolutionary developer incentivization platform",
      ethGlobalLink: "https://ethglobal.com/showcase/repo-rewards-su0bh",
      githubLink: "https://github.com/Krane-Apps/repo-rewards-superhack-2024",
      tags: ["Base", "Solidity", "DeFi"],
      image: "/images/achievements/superhack.png",
    },
    {
      title: "ETH Bangkok Winner 🏆",
      prize: "$2,000",
      project: "ZK Credit Score",
      period: "December 2023",
      description: "Blockchain-based credit scoring system using ZK Proofs",
      ethGlobalLink: "https://ethglobal.com/showcase/zk-credit-score-pa7r4",
      githubLink: "https://ethglobal.com/showcase/zk-credit-score-pa7r4",
      tags: ["ZK Proofs", "DeFi", "Privacy"],
      image: "/images/achievements/ethbangkok.png",
    },
  ];

  // Prepare images for the lightbox
  const slides = hackathons.map((hackathon) => ({
    src: hackathon.image,
    alt: hackathon.title,
  }));

  const openLightbox = (index: number) => {
    setImageIndex(index);
    setOpen(true);
  };

  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-zinc-900 p-4">
      <h2 className="text-2xl font-bold mb-4">Achievements 🏆</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-full w-px bg-zinc-700" />

        {/* Achievement items */}
        <div className="space-y-6">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="relative pl-6">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-green-500" />

              <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-3 border border-zinc-700">
                <div className="flex flex-col gap-3">
                  <div
                    className="relative w-full h-60 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={hackathon.image}
                      alt={hackathon.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="font-bold text-lg text-blue-400">
                        {hackathon.title}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {hackathon.period}
                      </span>
                    </div>
                    <div className="mb-1">
                      <span className="text-green-400">
                        {hackathon.project}
                        {hackathon.prize && ` • Prize: ${hackathon.prize}`}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-2 text-sm">
                      {hackathon.description}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={hackathon.ethGlobalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline flex items-center gap-1 text-sm"
                      >
                        <ExternalLink size={14} />
                        <span>ETH Global</span>
                      </a>
                      <a
                        href={hackathon.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline flex items-center gap-1 text-sm"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for fullscreen image viewing */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={slides}
      />
    </Card>
  );
}
