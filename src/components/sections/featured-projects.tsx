// the three projects worth scrolling for: text offset left, media full width
"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Em } from "../ui/pill-button";
import { useInView } from "@/lib/utils";

interface Project {
  name: string;
  kicker: string;
  description: React.ReactNode;
  stats?: { value: string; label: string }[];
  media: { src: string; kind: "video" | "image"; alt: string }[];
  link?: { label: string; href: string };
}

const PROJECTS: Project[] = [
  {
    name: "NearMe",
    kicker: "Went viral on the Solana Seeker",
    description: (
      <>
        Google Maps for Solana. Built and shipped to the Seeker dApp Store in{" "}
        <Em loud>two days</Em>, then it went viral: <Em loud>20K+ downloads</Em>,{" "}
        <Em>10K+ merchants</Em> accepting SOL scraped worldwide, and{" "}
        <Em>4.2 stars from 1.1K+ reviews</Em> left by real Seeker owners.
      </>
    ),
    stats: [
      { value: "2 days", label: "Idea to store" },
      { value: "20K+", label: "Downloads" },
      { value: "1.1K+", label: "Reviews" },
      { value: "10K+", label: "Merchants mapped" },
    ],
    media: [
      { src: "/images/nearme1.jpeg", kind: "image", alt: "NearMe store listing" },
      { src: "/images/nearme2.jpeg", kind: "image", alt: "NearMe reviews from Seeker owners" },
    ],
    link: { label: "All Seeker apps", href: "/seeker" },
  },
  {
    name: "Talkamore",
    kicker: "A wiki about your life that writes itself",
    description: (
      <>
        A remote <Em>MCP server with OAuth</Em> that any AI connects to, plus the
        React Native app around it. You tell Claude, ChatGPT or Cursor to save
        something and it gets written, filed and dated. Built the{" "}
        <Em>server, the app and the release pipeline</Em>.
      </>
    ),
    media: [
      { src: "/images/talkamore/6406.png", kind: "image", alt: "Talkamore app" },
      { src: "/images/talkamore/6407.png", kind: "image", alt: "Talkamore wiki page" },
      { src: "/images/talkamore/6408.png", kind: "image", alt: "Talkamore people page" },
    ],
    link: { label: "talkamore.com", href: "https://talkamore.com" },
  },
  {
    name: "DxSale",
    kicker: "A launchpad that moved real money",
    description: (
      <>
        The frontend for a DeFi launchpad that powered <Em>500+ token launches</Em>{" "}
        and <Em loud>$10M+ in volume</Em>, generating <Em>$100K+ in fees</Em>. Wallet
        flows in Ethers.js and <Em>3x organic traffic</Em> from SEO.
      </>
    ),
    media: [{ src: "/videos/dxfun_demo.mp4", kind: "video", alt: "DxSale launchpad demo" }],
    link: { label: "dxsale.network", href: "https://dxsale.network" },
  },
  {
    name: "Coupl and SuiSage",
    kicker: "Two more React Native apps",
    description: (
      <>
        A shared-spending app on the Play Store, and an AI portfolio assistant that
        chains models together to read a Sui wallet and explain what is in it.
      </>
    ),
    media: [
      { src: "/videos/couple_demo.mp4", kind: "video", alt: "Coupl app demo" },
      { src: "/videos/suidemo.mp4", kind: "video", alt: "SuiSage demo" },
    ],
    link: { label: "All mobile work", href: "/mobile" },
  },
];

// natural aspect, capped by height, so tall phone captures are not cropped
// into a letterbox next to a landscape screen recording
const MEDIA_CLASS = "h-full w-auto max-w-full rounded-2xl object-contain shadow-lg";

const Media = ({ item }: { item: Project["media"][number] }) =>
  item.kind === "video" ? (
    <video autoPlay loop muted playsInline aria-label={item.alt} className={MEDIA_CLASS}>
      <source src={item.src} type="video/mp4" />
    </video>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={item.src} alt={item.alt} className={MEDIA_CLASS} />
  );

export function ProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-[1200px] px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const single = project.media.length === 1;

  return (
    <div ref={ref} className={`reveal ${inView ? "in-view" : ""}`}>
      <div className="md:ml-28">
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#051A24]/45">
          {project.kicker}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-semibold text-[#051A24] md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#051A24]/70 md:text-base">
          {project.description}
        </p>

        {project.stats && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white px-5 py-3 shadow-[0_0_0_0.5px_rgba(0,0,0,0.07),0_2px_10px_rgba(0,0,0,0.05)]"
              >
                <p className="font-serif text-2xl text-[#0D212C]">{stat.value}</p>
                <p className="mt-0.5 text-xs text-[#051A24]/55">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {project.link && (
          <a
            href={project.link.href}
            {...(project.link.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#051A24] underline underline-offset-4"
          >
            {project.link.label}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      {/* capped so a project and its media still land inside one screen */}
      <div
        className={`mt-8 flex justify-center gap-4 ${
          single ? "h-[200px] md:h-[420px]" : "h-[260px] md:h-[440px]"
        }`}
      >
        {project.media.map((item) => (
          <Media key={item.src} item={item} />
        ))}
      </div>
    </div>
  );
}
