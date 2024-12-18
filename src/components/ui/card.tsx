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

export function Card({
  children,
  className,
  viewAllButton,
  onClick,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  viewAllButton?: React.ReactNode;
  onClick?: () => void;
  variant?: CardVariant;
}) {
  const bgImage = {
    solana: SolanaBg,
    solidity: SolidityBg,
    rust: RustBg,
    go: GoBg,
    frontend: FrontendBg,
    default: null,
  }[variant];

  return (
    <div
      className={cn(
        "bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative overflow-hidden rounded-3xl border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl transition-all duration-300 cursor-pointer group ",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {bgImage && (
        <div className="absolute inset-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          <Image
            src={bgImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50 z-10" />
        </div>
      )}
      <div className="relative z-20 h-full flex flex-col">
        <div className="flex-1">{children}</div>
        {viewAllButton}
      </div>
    </div>
  );
}
