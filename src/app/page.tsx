"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import ProfileImage from "@/assets/images/newdp.png";
import { Header, MARQUEE_MEDIA, SocialLinks } from "@/components/sections/header";
import { WhatIDo, WorkExperienceSection } from "@/components/sections/work-experience-section";
import { Achievements } from "@/components/sections/achievements";
import { ProjectsSection } from "@/components/sections/featured-projects";
import { OpenSourceContribution } from "@/components/sections/opensource-contribution";
import { TheStack } from "@/components/sections/the-stack";
import { PillButton } from "@/components/ui/pill-button";
import { useInView } from "@/lib/utils";

const TELEGRAM =
  "https://t.me/bluntbrainsol?text=Hi%20Ishan%2C%20I%20came%20across%20your%20portfolio%20at%20https%3A%2F%2Fbluntbrain.com%20and%20would%20like%20to%20connect!";

const PAGES = [
  { label: "Solana", href: "/solana" },
  { label: "Mobile", href: "/mobile" },
  { label: "Frontend", href: "/frontend" },
  { label: "EVM", href: "/ethereum" },
  { label: "Seeker", href: "/seeker" },
  { label: "Open source", href: "/opensource" },
  { label: "Video work", href: "https://creative.bluntbrain.com" },
];

// only the images from the reel trail well; videos would restart on every spawn
const TRAIL_IMAGES = MARQUEE_MEDIA.filter((src) => !src.endsWith(".mp4"));

interface Trail {
  id: number;
  src: string;
  x: number;
  y: number;
  rotate: number;
}

function PartnerSection() {
  const [trail, setTrail] = useState<Trail[]>([]);
  const lastSpawn = useRef(0);
  const counter = useRef(0);

  const onMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastSpawn.current < 120) return;
    lastSpawn.current = now;

    const rect = event.currentTarget.getBoundingClientRect();
    const id = counter.current++;
    const item: Trail = {
      id,
      src: TRAIL_IMAGES[id % TRAIL_IMAGES.length],
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      rotate: ((id * 37) % 21) - 10,
    };

    setTrail((prev) => [...prev.slice(-8), item]);
    setTimeout(() => setTrail((prev) => prev.filter((t) => t.id !== id)), 1000);
  }, []);

  return (
    <section className="w-full px-6 py-12">
      <div
        onMouseMove={onMove}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white py-32 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.06)] md:py-48"
      >
        {trail.map((item) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.id}
            src={item.src}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute h-40 w-28 rounded-xl object-cover shadow-lg"
            style={{
              left: item.x,
              top: item.y,
              transform: `translate(-50%, -50%) rotate(${item.rotate}deg) scale(0.9)`,
              animation: "trailOut 1s ease-out forwards",
            }}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center px-6">
          <h2 className="text-center text-[48px] leading-[1.05] tracking-tight text-[#0D212C] md:text-[64px] lg:text-[80px]">
            Build <span className="font-serif">with me</span>
          </h2>

          <a
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#051A24] py-2 pl-2 pr-7 text-sm text-white shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),inset_0_2px_8px_0_rgba(255,255,255,0.5)] transition-transform hover:-translate-y-0.5"
          >
            {/* the portrait has a lot of headroom, so zoom past it or the face
                is an unreadable speck at 40px */}
            <span className="block h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-white/20">
              <Image
                src={ProfileImage}
                alt="Ishan Lakhwani"
                width={80}
                height={80}
                className="h-full w-full scale-[1.45] object-cover object-[50%_18%]"
              />
            </span>
            Start a chat with Ishan
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <>
      <footer className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <PillButton href={TELEGRAM} external>
          Start a chat
        </PillButton>

        <div className="flex gap-12">
          <ArrowUpRight className="hidden h-5 w-5 text-[#051A24] md:block" />

          <div className="flex flex-col gap-2">
            {PAGES.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="text-base text-[#051A24] transition-opacity hover:opacity-70"
              >
                {page.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-2">
            <SocialLinks variant="row" />
          </div>
        </div>
      </footer>

      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 pb-28 text-sm text-[#051A24]">
        <span>Ishan Lakhwani</span>
        <span>bluntbrain.com</span>
      </div>
    </>
  );
}

// the floating pill duplicates the footer CTA and covers copy once you reach
// the bottom, so it steps out of the way when the outro is on screen
function BottomNav({ hidden }: { hidden: boolean }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        hidden ? "pointer-events-none translate-y-6 opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 shadow-[0_1px_2px_0_rgba(5,26,36,0.08),0_4px_16px_0_rgba(5,26,36,0.1),0_0_0_0.5px_rgba(0,0,0,0.06)] md:gap-4 md:pl-8">
        <a href="#top" className="font-serif text-2xl font-semibold text-[#051A24]">
          IL
        </a>
        <PillButton href={TELEGRAM} external className="px-5 py-2.5 text-xs md:px-6 md:text-sm">
          Start a chat
        </PillButton>
      </div>
    </div>
  );
}

export default function Home() {
  const { ref: outroRef, inView: outroVisible } = useInView<HTMLDivElement>(0.05, false);

  return (
    <div id="top" className="ink min-h-screen">
      <Header />
      <WhatIDo />
      {/* proof before showcase: prizes, downloads and merged PRs land first */}
      <Achievements />
      <OpenSourceContribution />
      <ProjectsSection />
      <WorkExperienceSection />
      <TheStack />
      <div ref={outroRef}>
        <PartnerSection />
        <SiteFooter />
      </div>
      <BottomNav hidden={outroVisible} />
    </div>
  );
}
