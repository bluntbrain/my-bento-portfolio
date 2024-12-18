import React from "react";
import { Card } from "../ui/card";
import { WorkExperience } from "../ui/work-experience";

export function WorkExperienceSection() {
  return (
    <Card className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Work Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <WorkExperience
          title="Co-founder"
          company="Krane Apps, Bangalore, India"
          period="February 2023 - Present"
          description="Lead a team of 10, focusing on Rust and Go for backend and React for frontend."
        />
        <WorkExperience
          title="iOS Team Lead (React Native)"
          company="Jar, Bangalore"
          period="February 2022 - February 2023"
          description="Led the iOS team, mentored junior developers, and conducted peer reviews."
        />
        <WorkExperience
          title="Software Engineer"
          company="Fleek, Bangalore"
          period="January 2020 - February 2022"
          description="Developed PWA in React.js and flagship app in React Native."
        />
      </div>
    </Card>
  );
}
