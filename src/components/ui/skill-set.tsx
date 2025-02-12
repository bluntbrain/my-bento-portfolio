import { motion } from "framer-motion";

interface SkillSetProps {
  title: string;
  skills: Array<{
    name: string;
    level?: "expert" | "advanced" | "intermediate";
    highlight?: boolean;
  }>;
}

export function SkillSet({ title, skills }: SkillSetProps) {
  return (
    <div>
      <h3 className="font-medium text-blue-400 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className={`
              inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
              transition-colors duration-200
              ${
                skill.highlight
                  ? "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                  : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
              }
            `}
          >
            {skill.name}
            {skill.level && (
              <div className="flex gap-0.5">
                {[...Array(getLevelDots(skill.level))].map((_, i) => (
                  <div
                    key={i}
                    className={`
                      w-1 h-1 rounded-full
                      ${skill.highlight ? "bg-blue-400" : "bg-gray-400"}
                    `}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function getLevelDots(level: "expert" | "advanced" | "intermediate"): number {
  switch (level) {
    case "expert":
      return 3;
    case "advanced":
      return 2;
    case "intermediate":
      return 1;
    default:
      return 0;
  }
}
