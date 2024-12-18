import { ArrowRight } from "lucide-react";

export function ViewAllButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group z-30 self-end"
    >
      <span className="text-sm font-medium underline underline-offset-4">
        View All
      </span>
      <ArrowRight
        size={16}
        className="transform transition-transform group-hover:translate-x-1"
      />
    </button>
  );
}
