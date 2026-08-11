// shared footer for the sub-pages
import React from "react";
import Link from "next/link";
import { PillButton } from "../ui/pill-button";
import { SocialLinks } from "./header";

const TELEGRAM =
  "https://t.me/bluntbrainsol?text=Hi%20Ishan%2C%20I%20came%20across%20your%20portfolio%20at%20https%3A%2F%2Fbluntbrain.com%20and%20would%20like%20to%20connect!";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-6 pb-16 pt-20">
      <div className="flex flex-col gap-8 border-t border-[#051A24]/10 pt-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-semibold text-[#051A24]">
            Ishan Lakhwani
          </Link>
          <p className="mt-2 text-sm text-[#051A24]/60">
            Fullstack and infrastructure. Mobile, frontend, backend, Solana.
          </p>
          <PillButton href={TELEGRAM} external className="mt-6">
            Start a chat
          </PillButton>
        </div>

        <div className="flex flex-col items-start gap-2">
          <SocialLinks variant="row" />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between text-sm text-[#051A24]/50">
        <span>&copy; {new Date().getFullYear()} Ishan Lakhwani</span>
        <span>bluntbrain.com</span>
      </div>
    </footer>
  );
}
