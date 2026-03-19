import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "../ui/card";

export function Footer() {
  const links = [
    { icon: <Github size={18} />, href: "https://github.com/bluntbrain", label: "GitHub" },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/bluntbrainsol",
      label: "X",
    },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/ishanl", label: "LinkedIn" },
    { icon: <Mail size={18} />, href: "https://t.me/bluntbrainsol?text=Hi%20Ishan%2C%20I%20came%20across%20your%20portfolio%20at%20https%3A%2F%2Fbluntbrain.com%20and%20would%20like%20to%20connect!", label: "Telegram" },
  ];

  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-4 px-6 py-6">
      <div className="flex items-center justify-between">
        <p className="text-gh-500 text-sm">
          © {new Date().getFullYear()} Ishan Lakhwani
        </p>
        <p className="text-gh-600 text-xs hidden sm:block">
          Built with Next.js & TailwindCSS
        </p>
        <div className="flex items-center gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gh-500 hover:text-white transition-colors duration-200"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}
