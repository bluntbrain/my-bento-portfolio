// copy-to-clipboard email button with inline confirmation. no toast provider
// needed, so it works in the footers as well as the hero.
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, Mail } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export function CopyEmailButton({ email, className = "" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // clipboard api needs a secure context and permission; the textarea
      // trick still works when it is refused
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(field);
      if (!ok) return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : `Copy email address ${email}`}
      className={className}
    >
      {copied ? <Check size={15} /> : <Mail size={15} />}
      {copied ? "Copied" : "Email"}
    </button>
  );
}
