import { cn } from "@/lib/utils";
import Image from "next/image";

import SolanaBg from "@/assets/tech-bg/solana-bg.jpg";
import SolidityBg from "@/assets/tech-bg/ethereum-bg.jpg";
import RustBg from "@/assets/tech-bg/rust-bg.jpg";
import GoBg from "@/assets/tech-bg/go-bg.jpg";
import FrontendBg from "@/assets/tech-bg/frontend-bg.jpg";

type CardVariant =
  | "solana"
  | "solidity"
  | "rust"
  | "go"
  | "frontend"
  | "default";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
}
export function Card({ children, className, variant, ...props }: CardProps) {
  const bgImage = {
    solana: SolanaBg,
    solidity: SolidityBg,
    rust: RustBg,
    go: GoBg,
    frontend: FrontendBg,
    default: null,
  }[variant || "default"];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] bg-white shadow-[0_0_0_0.5px_rgba(0,0,0,0.06),0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        className
      )}
      {...props}
    >
      {/* the tech background sits at a whisper on white, as a tint rather than art */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image src={bgImage} alt="" fill className="object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/70" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
