"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number; // 0-100
  color?: string;
}

interface SkillProgressProps {
  title: string;
  icon?: React.ReactNode;
  skills: Skill[];
  accentColor: string;
}

// animated skill progress bar component
export function SkillProgress({ title, icon, skills, accentColor }: SkillProgressProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        {icon && <span className={accentColor}>{icon}</span>}
        <h3 className={`font-bold text-lg ${accentColor}`}>{title}</h3>
      </div>

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gh-300">{skill.name}</span>
              <span className="text-xs text-gh-500">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gh-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={`h-full rounded-full ${skill.color || "bg-gradient-to-r from-blue-500 to-blue-400"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
