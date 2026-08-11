// shared primitives for the light theme: the pill CTA and the emphasis mark
// used to stop the eye on numbers a reader would otherwise skim past.
import React from "react";
import { cn } from "@/lib/utils";

// bold + underlined fact. `loud` adds a highlight for the handful of claims
// that carry the whole page.
export const Em = ({
  children,
  loud,
}: {
  children: React.ReactNode;
  loud?: boolean;
}) => (
  <strong
    className={cn(
      "font-semibold text-[#051A24] underline decoration-2 underline-offset-4",
      loud
        ? "bg-[#b9f24d]/40 px-1 decoration-[#051A24]/60"
        : "decoration-[#051A24]/25"
    )}
  >
    {children}
  </strong>
);

const PRIMARY_SHADOW =
  "shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),inset_0_2px_8px_0_rgba(255,255,255,0.5)]";
const SOFT_SHADOW = "shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]";

type Variant = "primary" | "secondary" | "onDark";

const VARIANTS: Record<Variant, string> = {
  primary: `bg-[#051A24] text-white ${PRIMARY_SHADOW}`,
  secondary: `bg-white text-[#051A24] ${SOFT_SHADOW}`,
  onDark: "bg-white/[0.08] text-[#F6FCFF] ring-1 ring-inset ring-white/15 hover:bg-white/[0.14]",
};

interface PillButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}

export const PillButton = ({
  href,
  children,
  variant = "primary",
  external,
  className,
}: PillButtonProps) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className={cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3 text-sm transition-transform hover:-translate-y-0.5",
      VARIANTS[variant],
      className
    )}
  >
    {children}
  </a>
);
