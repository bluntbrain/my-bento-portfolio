interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
