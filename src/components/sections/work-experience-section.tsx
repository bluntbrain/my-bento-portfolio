"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import Image from "next/image";

function CompanyLogo({ company, logo }: { company: string; logo?: string }) {
  if (logo) {
    return (
      <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-white/[0.04]">
        <Image src={logo} alt={company} width={40} height={40} className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/[0.04]">
      <span className="text-sm font-bold text-gh-400">{company.charAt(0)}</span>
    </div>
  );
}

export function WorkExperienceSection() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "SendAI",
      logo: "/images/sendai.png",
      type: "Full-time",
      period: "Sep 2025 - Present",
      duration: "3 mos",
      description: [
        <>Building consumer mobile apps at the intersection of <span className="text-white font-medium">Solana</span> and <span className="text-white font-medium">AI</span></>,
        <>Developing scalable mobile-first apps on <span className="text-white font-medium">Solana</span> blockchain</>,
        <>Leveraging <span className="text-white font-medium">6 years</span> of mobile dev to build apps scaling to <span className="text-white font-medium">10M+ users</span></>,
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company: "DxSale Network",
      logo: "/images/dxsale.png",
      type: "Full-time",
      period: "Mar 2024 - Aug 2025",
      duration: "1 yr 6 mos",
      description: [
        <>Built core frontend for DeFi launchpad using <span className="text-white font-medium">Next.js</span> and <span className="text-white font-medium">TailwindCSS</span></>,
        <>Launched <span className="text-white font-medium">500+</span> token sales, generating <span className="text-white font-medium">$100K+</span> in fees from <span className="text-white font-medium">$10M+</span> volume</>,
        <>Improved organic traffic by <span className="text-white font-medium">3x</span> through SEO optimization</>,
      ],
    },
    {
      title: "Co-founder",
      company: "Krane Apps",
      logo: "/images/kraneapps.png",
      type: "Full-time",
      period: "Feb 2023 - Mar 2024",
      duration: "1 yr 2 mos",
      description: [
        <>Led team of <span className="text-white font-medium">10</span> using <span className="text-white font-medium">Nest.js</span> and <span className="text-white font-medium">Next.js</span></>,
        <>Built <span className="text-white font-medium">blockchain projects</span> and <span className="text-white font-medium">DeFi apps</span> like Glitter Finance</>,
      ],
    },
    {
      title: "Frontend Team Lead",
      company: "Jar App",
      logo: "/images/jarapp.png",
      type: "Full-time",
      period: "Feb 2022 - Feb 2023",
      duration: "1 yr",
      description: [
        <>Led Frontend team, mentored devs, conducted peer reviews</>,
        <>Improved app performance by <span className="text-white font-medium">60%</span></>,
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Fleek",
      logo: "/images/fleek.png",
      type: "Full-time",
      period: "Jan 2020 - Feb 2022",
      duration: "2 yrs 2 mos",
      description: [
        <>Developed PWA in <span className="text-white font-medium">React.js</span> and flagship app in <span className="text-white font-medium">React Native</span></>,
        <>Reduced bundle size by <span className="text-white font-medium">45%</span> through code splitting</>,
      ],
    },
  ];

  return (
    <Card className="p-5 pb-3">
      <h2 className="font-medium text-gh-500 text-xs uppercase tracking-wider mb-4">Experience</h2>
      <div className="space-y-0">
        {experiences.map((exp, index) => {
          const isExpanded = expandedIndices.includes(index);
          const isLast = index === experiences.length - 1;
          const toggleExpand = () => {
            setExpandedIndices(prev =>
              isExpanded ? prev.filter(i => i !== index) : [...prev, index]
            );
          };
          return (
            <div key={index} className={`relative ${!isLast ? 'border-b border-white/[0.06]' : ''}`}>
              <button
                type="button"
                aria-expanded={isExpanded}
                className={`pt-3 ${isLast ? 'pb-0' : 'pb-3'} cursor-pointer hover:bg-white/[0.03] transition-colors rounded-xl px-2 -mx-2 w-full text-left`}
                onClick={toggleExpand}
              >
                <div className="flex gap-3">
                  <CompanyLogo company={exp.company} logo={exp.logo} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm">{exp.title}</h3>
                    <p className="text-gh-400 text-sm">{exp.company} · {exp.type}</p>
                    <p className="text-gh-500 text-xs mt-0.5">{exp.period} · {exp.duration}</p>
                    <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-96 mt-3' : 'max-h-0'}`}>
                      <ul className="space-y-1.5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-gh-400 flex items-start gap-2">
                            <span className="text-white mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0 self-start mt-1" aria-hidden="true">
                    <svg className={`w-4 h-4 text-gh-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
