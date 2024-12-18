interface WorkExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function WorkExperience({
  title,
  company,
  period,
  description,
}: WorkExperienceProps) {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 mb-1">{company}</p>
      <p className="text-gray-500 text-sm mb-2">{period}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}
