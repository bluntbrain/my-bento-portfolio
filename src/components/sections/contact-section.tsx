import React from "react";
import { CopyEmailButton } from "../ui/copy-email-button";
import { Github, Linkedin, Send } from "lucide-react";
import { Card } from "../ui/card";
import { SocialIcon } from "../ui/social-icon";
export function ContactSection() {
  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-4 p-4 bg-zinc-900">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-6">
          <SocialIcon
            href="https://x.com/bluntbrainsol"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            }
            label="X"
          />
          <SocialIcon
            href="https://github.com/bluntbrain"
            icon={<Github size={24} />}
            label="GitHub"
          />
          <SocialIcon
            href="https://linkedin.com/in/ishanl"
            icon={<Linkedin size={24} />}
            label="LinkedIn"
          />
          <CopyEmailButton email="ishan.lakhwani@gmail.com" />
        </div>
        <a
          href="https://t.me/bluntbrainsol?text=Hi%20Ishan%2C%20I%20came%20across%20your%20portfolio%20at%20https%3A%2F%2Fbluntbrain.com%20and%20would%20like%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-medium"
        >
          <Send size={16} />
          <span>Telegram</span>
        </a>
      </div>
    </Card>
  );
}
