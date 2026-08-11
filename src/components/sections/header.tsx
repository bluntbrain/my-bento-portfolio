// opening cluster of the home page: hero, the work marquee, and the pull quote
"use client";

import React from "react";
import Image from "next/image";
import { Quote, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import ProfileImage from "@/assets/images/newdp.png";
import { Em, PillButton } from "../ui/pill-button";
import { CopyEmailButton } from "../ui/copy-email-button";
import { useInView } from "@/lib/utils";

const TELEGRAM =
  "https://t.me/bluntbrainsol?text=Hi%20Ishan%2C%20I%20came%20across%20your%20portfolio%20at%20https%3A%2F%2Fbluntbrain.com%20and%20would%20like%20to%20connect!";

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const EMAIL = "ishan.lakhwani@gmail.com";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/bluntbrain", icon: <Github size={15} /> },
  { label: "X", href: "https://x.com/bluntbrain", icon: <XIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/ishanl", icon: <Linkedin size={15} /> },
  { label: "Telegram", href: TELEGRAM, icon: <Send size={15} /> },
];

const PILL =
  "inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#051A24] shadow-[0_0_0_0.5px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-0.5";
const ROW =
  "flex items-center gap-2 text-base text-[#051A24] transition-opacity hover:opacity-70";

// one list, three render sites. email copies rather than opening a mail client.
export function SocialLinks({ variant = "pill" }: { variant?: "pill" | "row" }) {
  const style = variant === "pill" ? PILL : ROW;
  return (
    <>
      {SOCIALS.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={style}
        >
          {social.icon}
          {social.label}
        </a>
      ))}
      <CopyEmailButton email={EMAIL} className={style} />
    </>
  );
}

// real shipped work, not stock loops
const REEL: { src: string; kind: "video" | "image"; alt: string }[] = [
  { src: "/videos/couple_demo.mp4", kind: "video", alt: "Coupl app demo" },
  { src: "/images/nearme1.jpeg", kind: "image", alt: "NearMe on the Seeker dApp Store" },
  { src: "/videos/dxfun_demo.mp4", kind: "video", alt: "DxSale launchpad demo" },
  { src: "/videos/suidemo.mp4", kind: "video", alt: "SuiSage demo" },
  { src: "/images/achievements/starkhack.png", kind: "image", alt: "StarkHack win" },
  { src: "/videos/locationdemo.mp4", kind: "video", alt: "Location app demo" },
  { src: "/images/nearme2.jpeg", kind: "image", alt: "NearMe reviews" },
  { src: "/videos/newsdemo.mp4", kind: "video", alt: "News app demo" },
  { src: "/images/achievements/superhack.png", kind: "image", alt: "SuperHack win" },
];

export const MARQUEE_MEDIA = REEL.map((item) => item.src);

const Fade = ({
  delay,
  children,
  className = "",
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export function Header() {
  return (
    <>
      <section className="mx-auto max-w-[560px] px-6 pt-12 md:pt-16">
        <Fade delay={0.1}>
          <p className="font-serif text-[32px] font-semibold tracking-tight text-[#051A24] md:text-[40px] lg:text-[44px]">
            bluntbrain
          </p>
        </Fade>

        <Fade delay={0.2}>
          <p className="mt-4 font-mono text-xs text-[#051A24] md:text-sm">
            Ishan Lakhwani, fullstack and infrastructure
          </p>
        </Fade>

        <Fade delay={0.3}>
          <h1 className="mt-2 text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]">
            From <span className="font-serif">Terraform</span>
            <br />
            to the <span className="font-serif">smart contract.</span>
          </h1>
        </Fade>

        <Fade delay={0.4}>
          <div className="mt-5 flex flex-col gap-6 text-sm leading-relaxed text-[#051A24] md:mt-6 md:text-base">
            <p>
              <Em>Senior fullstack engineer who owns the infrastructure too.</Em>{" "}
              Terraform, AWS, Fargate, RDS and Kubernetes underneath. React Native and
              Next.js on top. Rust and Solidity where the money moves.
            </p>
            <p>
              <Em>Seven years</Em> of it, including the frontend team at Jar at{" "}
              <Em>10M+ users</Em>, where a release either held or the whole support
              queue found out. That is where I learned what shipping reliable code
              actually costs.
            </p>
            <p>
              Today I am <Em>Infrastructure Lead at Spout Finance</Em>. Before that,
              consumer apps on Solana at SendAI. Same person on the cluster, the app,
              the contract and the frontend.
            </p>
            <p>Open to interesting work. Telegram is the fastest way to reach out to me.</p>
          </div>
        </Fade>

        <Fade delay={0.5}>
          <div className="mt-5 flex flex-col gap-3 md:mt-6 md:flex-row md:gap-4">
            <PillButton href={TELEGRAM} external>
              Start a chat
            </PillButton>
            <PillButton href="#work" variant="secondary">
              View the work
            </PillButton>
          </div>
        </Fade>

        {/* socials were footer-only and nobody scrolls that far */}
        <Fade delay={0.6}>
          <div className="mt-7 flex flex-wrap items-center gap-2">
            <SocialLinks />
          </div>
        </Fade>

        {/* the video side of things, deliberately quiet: a doorway, not a pitch */}
        <Fade delay={0.7}>
          <p className="mt-6 text-sm leading-relaxed text-[#051A24]/55">
            Separately, I make AI UGC and launch videos with Higgsfield, Remotion and
            ffmpeg.{" "}
            <a
              href="https://creative.bluntbrain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#051A24] underline underline-offset-4"
            >
              creative.bluntbrain.com
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </Fade>
      </section>

      <Marquee />
      <PullQuote />
    </>
  );
}

function Marquee() {
  const items = [...REEL, ...REEL];
  return (
    <div className="mb-16 mt-16 w-full overflow-hidden md:mt-20">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <div key={i} className="mx-3 h-[280px] shrink-0 md:h-[440px]">
            {item.kind === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                aria-label={item.alt}
                className="h-full w-auto rounded-2xl object-cover shadow-lg"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-auto rounded-2xl object-cover shadow-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PullQuote() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [offset, setOffset] = React.useState(0);

  // parallax on the portrait, capped so it never drifts out of its box
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const progress = 1 - rect.top / window.innerHeight;
        setOffset(Math.max(-40, Math.min(40, progress * 60 - 30)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ref]);

  return (
    <section className="mx-auto max-w-2xl px-6 py-12 text-center">
      <Fade delay={0.1}>
        <Quote className="mx-auto h-6 w-6 text-slate-900" />
      </Fade>

      <Fade delay={0.2}>
        <p className="mt-6 text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]">
          One bad release at Jar meant{" "}
          <span className="font-serif">3,000 support tickets</span> before lunch
        </p>
      </Fade>

      <Fade delay={0.3}>
        <p className="mt-6 text-sm italic text-[#273C46]">
          Ishan Lakhwani, on leading the frontend team at Jar App
        </p>
      </Fade>

      <Fade delay={0.4}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-2xl font-medium text-slate-900">
          <span>Spout</span>
          <span>SendAI</span>
          <span>DxSale</span>
          <span>Jar</span>
          <span>Fleek</span>
        </div>
      </Fade>

      <Fade delay={0.5} className="mt-12 flex justify-center">
        <div ref={ref} className="w-full max-w-xs overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={ProfileImage}
            alt="Ishan Lakhwani"
            width={400}
            height={400}
            style={{ transform: `translateY(${offset}px) scale(1.12)` }}
            className="h-full w-full object-cover"
          />
        </div>
      </Fade>
    </section>
  );
}
