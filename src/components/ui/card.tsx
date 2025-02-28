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
      className={cn("rounded-xl overflow-hidden relative", className)}
      {...props}
    >
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
