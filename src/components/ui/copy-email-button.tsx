import { toast } from "react-hot-toast";
import { Mail } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!", {
      style: {
        background: "rgb(20, 20, 20)",
        color: "#fff",
        border: "1px solid rgb(30, 30, 30)",
      },
      icon: "📧",
      duration: 2000,
    });
  };

  return (
    <button
      onClick={copyEmail}
      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
      aria-label="Copy Email"
    >
      <Mail size={24} />
    </button>
  );
}
