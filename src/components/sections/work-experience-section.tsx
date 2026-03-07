"use client";

import React, { useState } from "react";
import { Card } from "../ui/card";
import Image from "next/image";

// company logo component - uses image if available, fallback to initial
function CompanyLogo({ company, logo }: { company: string; logo?: string }) {
  if (logo) {
    return (
      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gh-800">
        <Image
          src={logo}
          alt={company}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // fallback to company initial with branded background
  const getCompanyColor = () => {
    return "bg-gh-700 text-gh-300";
  };

  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getCompanyColor()}`}>
      <span className="text-lg font-bold">{company.charAt(0)}</span>
    </div>
  );
}

// linkedin-style work experience section
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
      location: "Remote",
      description: [
        <>Building consumer mobile apps at the intersection of <span className="text-white">Solana</span> and <span className="text-white">AI</span></>,
        <>Developing scalable mobile-first apps on <span className="text-white">Solana</span> blockchain</>,
        <>Leveraging <span className="text-white">6 years</span> of mobile dev to build apps scaling to <span className="text-white">10M+ users</span></>,
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company: "DxSale Network",
      logo: "/images/dxsale.png",
      type: "Full-time",
      period: "Mar 2024 - Aug 2025",
      duration: "1 yr 6 mos",
      location: "Remote",
      description: [
        <>Built core frontend for DeFi launchpad using <span className="text-white">Next.js</span> and <span className="text-white">TailwindCSS</span></>,
        <>Integrated wallet interactions with <span className="text-white">Ethers.js</span> and <span className="text-white">Web3.js</span></>,
        <>Launched <span className="text-white">500+</span> token sales, generating <span className="text-white">$100K+</span> in fees from <span className="text-white">$10M+</span> volume</>,
        <>Improved organic traffic by <span className="text-white">3x</span> through SEO optimization</>,
      ],
    },
    {
      title: "Co-founder",
      company: "Krane Apps",
      logo: "/images/kraneapps.png",
      type: "Full-time",
      period: "Feb 2023 - Mar 2024",
      duration: "1 yr 2 mos",
      location: "Remote",
      description: [
        <>Led team of <span className="text-white">10</span> using <span className="text-white">Nest.js</span> and <span className="text-white">Next.js</span></>,
        <>Built <span className="text-white">blockchain projects</span> and <span className="text-white">DeFi apps</span> like Glitter Finance</>,
        <>Improved team productivity by <span className="text-white">40%</span> with agile methodologies</>,
      ],
    },
    {
      title: "Frontend Team Lead",
      company: "Jar App",
      logo: "/images/jarapp.png",
      type: "Full-time",
      period: "Feb 2022 - Feb 2023",
      duration: "1 yr",
      location: "Bangalore, India",
      description: [
        <>Led Frontend team, mentored devs, conducted peer reviews</>,
        <>Improved app performance by <span className="text-white">60%</span></>,
        <>Reduced deployment time by <span className="text-white">70%</span> with CI/CD</>,
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Fleek",
      logo: "/images/fleek.png",
      type: "Full-time",
      period: "Jan 2020 - Feb 2022",
      duration: "2 yrs 2 mos",
      location: "Remote",
      description: [
        <>Developed PWA in <span className="text-white">React.js</span> and flagship app in <span className="text-white">React Native</span></>,
        <>Reduced bundle size by <span className="text-white">45%</span> through code splitting</>,
      ],
    },
  ];

  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-gh-900 border border-gh-700 p-4">
      <h2 className="text-xl font-bold mb-4">Experience</h2>
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
            <div
              key={index}
              className={`relative ${!isLast ? 'border-b border-gh-700' : ''}`}
            >
              <div
                className="py-3 cursor-pointer hover:bg-gh-800/50 transition-colors rounded-xl px-2 -mx-2"
                onClick={toggleExpand}
              >
                {/* main row with logo */}
                <div className="flex gap-3">
                  <CompanyLogo company={exp.company} logo={exp.logo} />

                  <div className="flex-1 min-w-0">
                    {/* title */}
                    <h3 className="font-semibold text-white text-lg">{exp.title}</h3>

                    {/* company and type */}
                    <p className="text-gh-300 text-base">
                      {exp.company} · {exp.type}
                    </p>

                    {/* period, duration and location */}
                    <p className="text-gh-400 text-sm">
                      {exp.period} · {exp.duration} · {exp.location}
                    </p>

                    {/* expandable description */}
                    <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-96 mt-3' : 'max-h-0'}`}>
                      <ul className="space-y-1.5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-base text-gh-300 flex items-start gap-2">
                            <span className="text-gh-500 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* expand indicator */}
                  <div className="flex-shrink-0 self-start mt-1">
                    <svg
                      className={`w-4 h-4 text-gh-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
