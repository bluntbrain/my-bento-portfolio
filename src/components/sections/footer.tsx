import React from "react";
import { Card } from "../ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const links = [
    {
      icon: <Github size={16} />,
      href: "https://github.com/bluntbrain",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/bluntbrainsol",
      label: "X",
      color: "hover:text-white",
    },
    {
      icon: <Linkedin size={16} />,
      href: "https://linkedin.com/in/ishanl",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: <Mail size={16} />,
      href: "https://t.me/bluntbrainsol?text=Hi%20Ishan%2C%20I%20came%20across%20your%20portfolio%20at%20https%3A%2F%2Fbluntbrain.com%20and%20would%20like%20to%20connect!",
      label: "Telegram",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gh-900 border border-gh-700 p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-gh-400">
            Built with{" "}
            <span className="text-secondary font-medium">Next.js</span> &{" "}
            <span className="text-primary font-medium">TailwindCSS</span>
          </p>
          <p className="text-sm text-gh-500">
            © {new Date().getFullYear()} Ishan Lakhwani. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gh-400 transition-colors duration-200 ${link.color}`}
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
