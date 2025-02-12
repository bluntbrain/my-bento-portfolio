import React from "react";
import { Card } from "../ui/card";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const links = [
    {
      icon: <Github size={16} />,
      href: "https://github.com/bluntbrain",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: <Twitter size={16} />,
      href: "https://twitter.com/bluntbrain_web3",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: <Linkedin size={16} />,
      href: "https://linkedin.com/in/ishanl",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: <Mail size={16} />,
      href: "mailto:ishan.lakhwani@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900 p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-gray-400">
            Built with{" "}
            <span className="text-green-400 font-medium">Next.js</span> &{" "}
            <span className="text-blue-400 font-medium">TailwindCSS</span>
          </p>
          <p className="text-sm text-gray-500">
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
              className={`text-gray-400 transition-colors duration-200 ${link.color}`}
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
