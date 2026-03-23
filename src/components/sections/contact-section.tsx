import React from "react";
import { CopyEmailButton } from "../ui/copy-email-button";
import { Github, Linkedin, Send } from "lucide-react";
import { SocialIcon } from "../ui/social-icon";
import { Card } from "../ui/card";

export function ContactSection() {
  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-4 px-5 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-white font-semibold text-sm shrink-0 hover:text-gh-300 transition-colors"
        >
          BluntBrain
        </a>

        {/* Center social links */}
        <div className="flex items-center gap-5">
          <SocialIcon
            href="https://x.com/bluntbrain"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            }
            label="X"
          />
          <SocialIcon
            href="https://github.com/bluntbrain"
            icon={<Github size={20} />}
            label="GitHub"
          />
          <SocialIcon
            href="https://linkedin.com/in/ishanl"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
          />
          <CopyEmailButton email="ishan.lakhwani@gmail.com" />
        </div>

        {/* Right CTA */}
        <a
          href="https://t.me/bluntbrainsol?text=Hi%20Ishan%2C%20I%20came%20across%20your%20portfolio%20at%20https%3A%2F%2Fbluntbrain.com%20and%20would%20like%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          <Send size={14} />
          <span>Telegram</span>
        </a>
      </div>
    </Card>
  );
}
