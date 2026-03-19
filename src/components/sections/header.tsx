"use client";

import React from "react";
import Image from "next/image";
import ProfileImage from "@/assets/images/newdp.png";
import { Card } from "../ui/card";
import { SkillRadial } from "../ui/skill-radial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRust, faReact, faEthereum, faDocker, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faShield, faBolt, faTerminal, faAnchor } from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <>
      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 p-5">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
          Hi, I&apos;m Ishan
        </h1>
        <p className="text-gh-400 text-sm leading-relaxed">
          <span className="text-white font-medium">Mobile App Developer</span> &{" "}
          <span className="text-white font-medium">Rust Protocol Engineer</span> with{" "}
          <span className="text-white font-medium">6+ years</span> of experience building
          apps scaling to <span className="text-white font-medium">10M+ users</span> and
          secure <span className="text-white font-medium">Solana smart contracts</span>.
        </p>
      </Card>

      <Card className="col-span-1 sm:col-span-2 lg:col-span-1 p-0 aspect-square">
        <Image
          src={ProfileImage}
          alt="Ishan"
          width={400}
          height={400}
          className="object-cover rounded-2xl w-full h-auto"
        />
      </Card>

      <Card className="col-span-1 sm:col-span-2 lg:col-span-2 p-5">
        <h3 className="font-medium text-gh-500 text-xs uppercase tracking-wider mb-4">Skills</h3>
        <SkillRadial skills={[
          { name: "Rust", level: 88, color: "text-gh-200", icon: <FontAwesomeIcon icon={faRust} className="w-5 h-5" /> },
          { name: "Solana", level: 85, color: "text-gh-200", icon: <Image src="/images/solana.svg" alt="Solana" width={20} height={20} className="w-5 h-5" /> },
          { name: "Anchor", level: 85, color: "text-gh-200", icon: <FontAwesomeIcon icon={faAnchor} className="w-5 h-5" /> },
          { name: "React Native", level: 95, color: "text-gh-200", icon: <FontAwesomeIcon icon={faReact} className="w-5 h-5" /> },
          { name: "TypeScript", level: 90, color: "text-gh-200", icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
            </svg>
          ) },
          { name: "Solidity", level: 85, color: "text-gh-200", icon: <FontAwesomeIcon icon={faEthereum} className="w-5 h-5" /> },
          { name: "PDAs/CPIs", level: 85, color: "text-gh-200", icon: <FontAwesomeIcon icon={faDatabase} className="w-5 h-5" /> },
          { name: "Security", level: 82, color: "text-gh-200", icon: <FontAwesomeIcon icon={faShield} className="w-5 h-5" /> },
          { name: "DeFi", level: 85, color: "text-gh-200", icon: <FontAwesomeIcon icon={faBolt} className="w-5 h-5" /> },
          { name: "CLI Tools", level: 80, color: "text-gh-200", icon: <FontAwesomeIcon icon={faTerminal} className="w-5 h-5" /> },
          { name: "Docker", level: 78, color: "text-gh-200", icon: <FontAwesomeIcon icon={faDocker} className="w-5 h-5" /> },
          { name: "Git", level: 90, color: "text-gh-200", icon: <FontAwesomeIcon icon={faGitAlt} className="w-5 h-5" /> },
        ]} />
      </Card>
    </>
  );
}
