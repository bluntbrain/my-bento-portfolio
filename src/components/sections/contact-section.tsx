import React from "react";
import { CopyEmailButton } from "../ui/copy-email-button";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Card } from "../ui/card";
import { SocialIcon } from "../ui/social-icon";

export function ContactSection() {
  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-4 p-4 bg-zinc-900">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-6">
          <SocialIcon
            href="https://twitter.com/bluntbrain_web3"
            icon={<Twitter size={24} />}
            label="Twitter"
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
        </div>
        <CopyEmailButton email="ishan.lakhwani@gmail.com" />
      </div>
    </Card>
  );
}
