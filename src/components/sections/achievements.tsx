import React, { useState } from "react";
import { Card } from "../ui/card";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// compact achievements section - displays hackathon wins in a smaller card format
export function Achievements() {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const hackathons = [
    {
      title: "StarkHack Winner",
      prize: "$4,000",
      project: "Chain Monsters",
      description: "On-chain monster battling game built on StarkNet using Cairo",
      period: "Mar 2024",
      ethGlobalLink: "https://ethglobal.com/showcase/chain-monsters-o26dw",
      githubLink: "https://github.com/Krane-Apps/chain-monsters",
      tags: ["StarkNet", "Cairo"],
      image: "/images/achievements/starkhack.png",
    },
    {
      title: "SuperHack Winner",
      prize: "$10,000",
      project: "Repo Reward",
      description: "Decentralized bounty platform for open source contributions on Base",
      period: "Feb 2024",
      ethGlobalLink: "https://ethglobal.com/showcase/repo-rewards-su0bh",
      githubLink: "https://github.com/Krane-Apps/repo-rewards-superhack-2024",
      tags: ["Base", "Solidity"],
      image: "/images/achievements/superhack.png",
    },
    {
      title: "ETH Bangkok Winner",
      prize: "$2,000",
      project: "ZK Credit Score",
      description: "Privacy-preserving credit scoring using zero-knowledge proofs",
      period: "Dec 2023",
      ethGlobalLink: "https://ethglobal.com/showcase/zk-credit-score-pa7r4",
      githubLink: "https://ethglobal.com/showcase/zk-credit-score-pa7r4",
      tags: ["ZK Proofs", "DeFi"],
      image: "/images/achievements/ethbangkok.png",
    },
  ];

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
      <h2 className="text-xl font-bold mb-3">Hackathon Wins</h2>

      {/* compact grid layout for achievements */}
      <div className="space-y-3">
        {hackathons.map((hackathon, index) => (
          <div
            key={index}
            className="bg-zinc-800/80 backdrop-blur-sm rounded-lg overflow-hidden border border-zinc-700 hover:border-primary/50 transition-all"
          >
            <div className="flex">
              {/* image - left side, full height */}
              <div
                className="relative w-40 flex-shrink-0 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={hackathon.image}
                  alt={hackathon.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* content section - right side */}
              <div className="flex-1 p-3 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-sm text-primary">
                    {hackathon.title}
                  </h3>
                  <span className="text-lg font-bold text-accent">
                    {hackathon.prize}
                  </span>
                </div>

                <p className="text-xs text-gray-300">
                  {hackathon.project}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {hackathon.description}
                </p>

                {/* tags and period row */}
                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-center gap-1.5">
                    {hackathon.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 bg-zinc-700 text-gray-300 rounded text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500">{hackathon.period}</span>
                </div>

                {/* action buttons */}
                <div className="flex gap-2 mt-2">
                  <a
                    href={hackathon.ethGlobalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary hover:bg-primary/20 rounded text-[10px] border border-primary/20 transition-colors"
                  >
                    <ExternalLink size={10} />
                    ETH Global
                  </a>
                  <a
                    href={hackathon.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2 py-1 bg-secondary/10 text-secondary hover:bg-secondary/20 rounded text-[10px] border border-secondary/20 transition-colors"
                  >
                    <Github size={10} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={slides}
      />
    </Card>
  );
}
