import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 border-zinc-700",
        "hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400",
        "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105",
        "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
