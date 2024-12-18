import { Badge } from "../ui/badge";
interface SkillSetProps {
  title: string;
  skills: string[];
}

export function SkillSet({ title, skills }: SkillSetProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="flex flex-col space-y-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-zinc-900 text-white w-full"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
