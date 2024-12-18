import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Github, ExternalLink, X } from "lucide-react";
import React from "react";

interface ViewAllDialogProps {
  title: string;
  items: Array<{
    name: string;
    description: string;
    github?: string;
    live?: string;
  }>;
}

export function ViewAllDialog({
  title,
  items,
  open,
  onOpenChange,
}: ViewAllDialogProps & {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const Dialog = DialogPrimitive.Root;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className={cn(
            "fixed inset-y-0 right-0 z-50 h-full w-full sm:w-[700px] lg:w-[900px] border-l bg-zinc-950",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
            "duration-300 ease-in-out"
          )}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 p-6">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <button
                onClick={() => onOpenChange(false)}
                className="rounded-full p-2.5 bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-900/50 rounded-xl hover:bg-zinc-900 transition-colors"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-yellow-400">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <div className="flex gap-4">
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1.5"
                        >
                          <Github size={18} />
                          <span>GitHub</span>
                        </a>
                      )}
                      {item.live && (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 hover:underline flex items-center gap-1.5"
                        >
                          <ExternalLink size={18} />
                          <span>Live App</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
}
