// top nav for the sub-pages. the home page has its own bottom pill instead.
"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PillButton } from "../ui/pill-button";

const TELEGRAM =
  "https://t.me/bluntbrainsol?text=Hi%20Ishan%2C%20I%20came%20across%20your%20portfolio%20at%20https%3A%2F%2Fbluntbrain.com%20and%20would%20like%20to%20connect!";

const LINKS = [
  { label: "Solana", href: "/solana" },
  { label: "Mobile", href: "/mobile" },
  { label: "Frontend", href: "/frontend" },
  { label: "EVM", href: "/ethereum" },
  { label: "Seeker", href: "/seeker" },
];

export function ContactSection() {
  return (
    <header className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-6 gap-y-4 px-6 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-serif text-2xl font-semibold text-[#051A24]"
      >
        <ArrowLeft className="h-4 w-4" />
        bluntbrain
      </Link>

      <nav className="ml-auto flex flex-wrap items-center gap-x-6 gap-y-2">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-[#051A24] transition-opacity hover:opacity-60"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <PillButton href={TELEGRAM} external className="px-6 py-2.5 text-xs">
        Start a chat
      </PillButton>
    </header>
  );
}
