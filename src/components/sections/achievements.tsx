import React, { useState } from "react";
import { Card } from "../ui/card";
import { Github, ExternalLink } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
    <Card className="col-span-1 sm:col-span-2 lg:col-span-4 p-5">
      <h2 className="font-medium text-gh-500 text-xs uppercase tracking-wider mb-4">Hackathon Wins</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {hackathons.map((hackathon, index) => (
          <div
            key={index}
            className="bg-white/[0.03] rounded-xl overflow-hidden border border-white/[0.06] hover:border-white/[0.1] transition-colors flex flex-col"
          >
            <div
              role="button"
              tabIndex={0}
              aria-label={`View ${hackathon.title} photo`}
              className="relative w-full h-48 overflow-hidden cursor-pointer flex-shrink-0"
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(index); }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hackathon.image}
                alt={hackathon.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-3 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-sm text-white">
                  {hackathon.title}
                </h3>
                <span className="text-sm font-semibold text-white">
                  {hackathon.prize}
                </span>
              </div>

              <p className="text-xs text-gh-400">
                {hackathon.project}
              </p>

              <p className="text-xs text-gh-500 mt-0.5 line-clamp-2">
                {hackathon.description}
              </p>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1.5">
                  {hackathon.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-1.5 py-0.5 bg-white/[0.06] text-gh-400 rounded-md text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-gh-600">{hackathon.period}</span>
              </div>

              <div className="flex gap-2 mt-auto pt-3">
                <a
                  href={hackathon.ethGlobalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-1 bg-white/[0.06] hover:bg-white/[0.1] text-gh-400 rounded-md text-[10px] transition-colors"
                >
                  <ExternalLink size={10} />
                  ETH Global
                </a>
                <a
                  href={hackathon.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-1 bg-white/[0.06] hover:bg-white/[0.1] text-gh-400 rounded-md text-[10px] transition-colors"
                >
                  <Github size={10} />
                  Source
                </a>
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
