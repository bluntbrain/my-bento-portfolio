interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      className="text-[#051A24]/55 hover:text-[#051A24] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
