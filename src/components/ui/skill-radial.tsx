"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  level: number; // 0-100
  color: string; // tailwind color class like "text-blue-500"
}

interface SkillRadialProps {
  skills: SkillItem[];
}

// radial progress component for individual skill
function RadialProgress({
  level,
  color,
  icon,
  name,
  delay = 0
}: {
  level: number;
  color: string;
  icon: React.ReactNode;
  name: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const size = 64;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // extract color for svg stroke
  const getStrokeColor = () => {
    return "#ededed";
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        {/* background circle */}
        <svg className="absolute" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#262626"
            strokeWidth={strokeWidth}
          />
        </svg>

        {/* progress circle */}
        <svg className="absolute -rotate-90" width={size} height={size}>
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={getStrokeColor()}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isVisible ? offset : circumference }}
            transition={{ duration: 1, delay, ease: "easeOut" }}
          />
        </svg>

        {/* icon in center */}
        <div className={`absolute inset-0 flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>

      {/* skill name */}
      <span className="text-xs text-gh-400 text-center max-w-[64px] leading-tight">
        {name}
      </span>
    </div>
  );
}

// grid of skills with radial progress
export function SkillRadial({ skills }: SkillRadialProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
      {skills.map((skill, index) => (
        <RadialProgress
          key={skill.name}
          level={skill.level}
          color={skill.color}
          icon={skill.icon}
          name={skill.name}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
