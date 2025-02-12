import React from "react";
import { Card } from "../ui/card";

export function WorkExperienceSection() {
  const experiences = [
    {
      title: "Co-founder",
      company: "Krane Apps",
      location: "Bangalore, India",
      period: "February 2023 - Present",
      description: [
        <span key="1">
          Lead a team of{" "}
          <span className="text-yellow-400 font-semibold">10</span>, focusing on{" "}
          <span className="text-green-400 font-semibold">Rust</span> and{" "}
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
        </span>,
        <span key="3">
          Implemented agile methodologies and improved team productivity by{" "}
          <span className="text-yellow-400 font-semibold">40%</span>
        </span>,
      ],
      tags: ["Team Leadership", "Blockchain", "DeFi", "Rust", "React"],
    },
    {
      title: "iOS Team Lead (React Native)",
      company: "Jar",
      location: "Bangalore",
      period: "February 2022 - February 2023",
      description: [
        "Led the iOS team, mentored junior developers, and conducted peer reviews",
        "Improved app performance by 60% through optimization techniques",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
      ],
      tags: ["iOS", "React Native", "Team Lead", "CI/CD", "Mentoring"],
    },
    {
      title: "Software Engineer",
      company: "Fleek",
      location: "Bangalore",
      period: "January 2020 - February 2022",
      description: [
        "Developed PWA in React.js and flagship app in React Native",
        "Integrated multiple third-party services and payment gateways",
        "Reduced app bundle size by 45% through code splitting and lazy loading",
      ],
      tags: ["React.js", "React Native", "PWA", "Performance"],
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
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500" />

              <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 border border-zinc-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-blue-400">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <div className="mb-2">
                  <span className="text-yellow-400">
                    {exp.company} • {exp.location}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
