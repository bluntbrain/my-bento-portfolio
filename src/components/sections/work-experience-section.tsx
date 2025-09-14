import React, { useState } from "react";
import { Card } from "../ui/card";

export function WorkExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "SendAI",
      location: "",
      period: "September 2025 - Present",
      description: [
        <span key="1">
          Building the next generation of consumer mobile apps at the intersection of{" "}
          <span className="text-green-400 font-semibold">Solana</span> and{" "}
          <span className="text-green-400 font-semibold">AI</span>
        </span>,
        <span key="2">
          Developing scalable mobile-first applications on{" "}
          <span className="text-blue-400 font-semibold">Solana</span> blockchain
          with focus on consumer experience
        </span>,
        <span key="3">
          Leveraging{" "}
          <span className="text-yellow-400 font-semibold">6 years</span> of
          mobile development experience to build apps that can scale to{" "}
          <span className="text-yellow-400 font-semibold">10M+ users</span>
        </span>,
      ],
      tags: ["Solana", "AI", "Mobile Development", "Blockchain", "Consumer Apps"],
    },
    {
      title: "Senior Frontend Engineer",
      company: "DxSale Network",
      location: "",
      period: "March 2024 - August 2025",
      description: [
        <span key="1">
          Built and maintained core frontend features for DxSale&apos;s DeFi
          launchpad using{" "}
          <span className="text-green-400 font-semibold">Next.js</span> and{" "}
          <span className="text-green-400 font-semibold">TailwindCSS</span>
        </span>,
        <span key="2">
          Improved UI performance and reduced bounce rate through optimization
          and responsive design
        </span>,
        <span key="3">
          Integrated real-time data visualization and wallet interactions with{" "}
          <span className="text-green-400 font-semibold">Ethers.js</span> and{" "}
          <span className="text-green-400 font-semibold">Web3.js</span>
        </span>,
        <span key="4">
          Helped launch over{" "}
          <span className="text-yellow-400 font-semibold">500</span> token
          sales, generating{" "}
          <span className="text-yellow-400 font-semibold">$100K+</span> in fees
          from <span className="text-yellow-400 font-semibold">$10M+</span> in
          transaction volume
        </span>,
        <span key="5">
          Implemented SEO best practices, improving organic traffic by{" "}
          <span className="text-yellow-400 font-semibold">3x</span> over{" "}
          <span className="text-yellow-400 font-semibold">6 months</span>
        </span>,
      ],
      tags: ["Next.js", "TailwindCSS", "Ethers.js", "Web3.js", "DeFi", "SEO"],
    },
    {
      title: "Co-founder",
      company: "Krane Apps",
      location: "",
      period: "February 2023 - March 2024",
      description: [
        <span key="1">
          Led a team of{" "}
          <span className="text-yellow-400 font-semibold">10</span>, focusing on{" "}
          <span className="text-green-400 font-semibold">Nest.js</span> for
          backend and{" "}
          <span className="text-green-400 font-semibold">Next.js</span> for
          frontend
        </span>,
        <span key="2">
          Developed multiple successful{" "}
          <span className="text-blue-400 font-semibold">
            blockchain projects
          </span>{" "}
          and{" "}
          <span className="text-blue-400 font-semibold">DeFi applications</span>
          , like Glitter Finance
        </span>,
        <span key="3">
          Implemented agile methodologies and improved team productivity by{" "}
          <span className="text-yellow-400 font-semibold">40%</span>
        </span>,
      ],
      tags: ["Team Leadership", "Blockchain", "DeFi", "Next.js", "Nest.js"],
    },
    {
      title: "Frontend Team Lead",
      company: "Jar App",
      location: "Bangalore",
      period: "February 2022 - February 2023",
      description: [
        <span key="1">
          Led the Frontend team, mentored junior developers, and conducted peer
          reviews
        </span>,
        <span key="2">
          Improved app performance by{" "}
          <span className="text-yellow-400 font-semibold">60%</span> through
          optimisation techniques
        </span>,
        <span key="3">
          Implemented CI/CD pipelines reducing deployment time by{" "}
          <span className="text-yellow-400 font-semibold">70%</span>
        </span>,
      ],
      tags: [
        "Team Leadership",
        "Performance Optimization",
        "CI/CD",
        "Mentoring",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Fleek",
      location: "Bangalore",
      period: "January 2020 - February 2022",
      description: [
        <span key="1">
          Developed PWA in{" "}
          <span className="text-green-400 font-semibold">React.js</span> and
          flagship app in{" "}
          <span className="text-green-400 font-semibold">React Native</span>
        </span>,
        <span key="2">
          Reduced app bundle size by{" "}
          <span className="text-yellow-400 font-semibold">45%</span> through
          code splitting and lazy loading
        </span>,
      ],
      tags: ["React.js", "React Native", "PWA", "Performance Optimization"],
    },
  ];

  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-2 bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-full w-px bg-zinc-700" />

        {/* Experience items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index} className="relative pl-6">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500" />

                <div 
                  className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 border border-zinc-700 cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-800/90 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] group"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">{exp.period}</span>
                      <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors font-medium">
                      {exp.company}
                      {exp.location ? ` • ${exp.location}` : ""}
                    </span>
                  </div>
                  
                  {/* Collapsible content */}
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-gray-300 leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs group-hover:bg-blue-400/20 transition-colors border border-blue-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Click to expand hint */}
                  {!isExpanded && (
                    <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      Click to explore details
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
