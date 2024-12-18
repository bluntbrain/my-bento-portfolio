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
  const DialogHeader = ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )}
      {...props}
    />
  );
  DialogHeader.displayName = "DialogHeader";

  const DialogFooter = ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
  DialogFooter.displayName = "DialogFooter";

  const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
  >(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  ));
  DialogTitle.displayName = DialogPrimitive.Title.displayName;

  const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
  >(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  ));
  DialogDescription.displayName = DialogPrimitive.Description.displayName;

  const DialogPortal = ({
    children,
    ...props
  }: DialogPrimitive.DialogPortalProps) => (
    <DialogPrimitive.Portal {...props}>
      <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
        {children}
      </div>
    </DialogPrimitive.Portal>
  );
  DialogPortal.displayName = DialogPrimitive.Portal.displayName;

  const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
  >(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
        className
      )}
      {...props}
    />
  ));
  DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

  const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
  >(({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  ));
  DialogContent.displayName = DialogPrimitive.Content.displayName;
  const Dialog = DialogPrimitive.Root;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed inset-x-0 bottom-0 h-[95vh] !max-w-full !rounded-t-2xl !rounded-b-none sm:!rounded-t-2xl animate-in data-[state=open]:slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom">
        <div className="absolute left-1/2 top-2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="h-1.5 w-12 rounded-full bg-gray-300" />
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full p-2 bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <DialogHeader className="mt-16">
          <DialogTitle className="text-center text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 overflow-y-auto max-h-[calc(95vh-8rem)] pr-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-6 p-4 bg-[rgb(20,20,20)] rounded-xl hover:bg-[rgb(30,30,30)] transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-400 mb-3">{item.description}</p>
              <div className="flex gap-4">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                )}
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    <span>Live App</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
