import React, { useState } from "react";
import { Card } from "../ui/card";

// compact work experience section with expandable details
export function WorkExperienceSection() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0, 1]);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "SendAI",
      period: "Sep 2025 - Present",
      description: [
        <>Building consumer mobile apps at the intersection of <span className="text-primary">Solana</span> and <span className="text-primary">AI</span></>,
        <>Developing scalable mobile-first apps on <span className="text-accent">Solana</span> blockchain</>,
        <>Leveraging <span className="text-accent">6 years</span> of mobile dev to build apps scaling to <span className="text-accent">10M+ users</span></>,
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company: "DxSale Network",
      period: "Mar 2024 - Aug 2025",
      description: [
        <>Built core frontend for DeFi launchpad using <span className="text-primary">Next.js</span> and <span className="text-primary">TailwindCSS</span></>,
        <>Integrated wallet interactions with <span className="text-primary">Ethers.js</span> and <span className="text-primary">Web3.js</span></>,
        <>Launched <span className="text-accent">500+</span> token sales, generating <span className="text-accent">$100K+</span> in fees from <span className="text-accent">$10M+</span> volume</>,
        <>Improved organic traffic by <span className="text-accent">3x</span> through SEO optimization</>,
      ],
    },
    {
      title: "Co-founder",
      company: "Krane Apps",
      period: "Feb 2023 - Mar 2024",
      description: [
        <>Led team of <span className="text-accent">10</span> using <span className="text-primary">Nest.js</span> and <span className="text-primary">Next.js</span></>,
        <>Built <span className="text-accent">blockchain projects</span> and <span className="text-accent">DeFi apps</span> like Glitter Finance</>,
        <>Improved team productivity by <span className="text-accent">40%</span> with agile methodologies</>,
      ],
    },
    {
      title: "Frontend Team Lead",
      company: "Jar App",
      period: "Feb 2022 - Feb 2023",
      description: [
        <>Led Frontend team, mentored devs, conducted peer reviews</>,
        <>Improved app performance by <span className="text-accent">60%</span></>,
        <>Reduced deployment time by <span className="text-accent">70%</span> with CI/CD</>,
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Fleek",
      period: "Jan 2020 - Feb 2022",
      description: [
        <>Developed PWA in <span className="text-primary">React.js</span> and flagship app in <span className="text-primary">React Native</span></>,
        <>Reduced bundle size by <span className="text-accent">45%</span> through code splitting</>,
      ],
    },
  ];

  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-zinc-900 p-4">
      <h2 className="text-xl font-bold mb-3">Work Experience</h2>
      <div className="relative">
        <div className="space-y-2">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndices.includes(index);
            const toggleExpand = () => {
              setExpandedIndices(prev =>
                isExpanded ? prev.filter(i => i !== index) : [...prev, index]
              );
            };
            return (
              <div key={index} className="relative">

                <div
                  className="bg-zinc-800/80 rounded-lg p-3 border border-zinc-700 cursor-pointer hover:border-accent/50 transition-all"
                  onClick={toggleExpand}
                >
                  {/* header row */}
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-base text-accent truncate">{exp.title}</h3>
                        <span className="text-primary text-sm hidden sm:inline">@ {exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:hidden">
                        <span className="text-primary text-sm">@ {exp.company}</span>
                        <span className="text-xs text-gray-400">{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-gray-400 hidden sm:block">{exp.period}</span>
                      <svg className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* expandable content */}
                  <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-64 mt-3' : 'max-h-0'}`}>
                    <ul className="space-y-1.5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-gray-500 mt-0.5">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
