import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const links = [
  { href: "https://github.com/YoussrH", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/yosr-el-hamdouni", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/YosrH21", icon: Twitter, label: "X / Twitter" },
  { href: "mailto:elhamdouni.yosr@gmail.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="w-full mt-20 pb-8 flex flex-col items-center gap-4">
      <div
        className="h-px w-full max-w-xs"
        style={{ background: "linear-gradient(90deg, transparent, rgba(254,254,91,0.3), transparent)" }}
      />
      <div className="flex items-center gap-4">
        {links.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            aria-label={label}
            className="w-9 h-9 rounded-full custom-bg flex items-center justify-center text-foreground/50 hover:text-accent hover-glow transition-all duration-200"
          >
            <Icon size={15} strokeWidth={1.5} />
          </Link>
        ))}
      </div>
      <p className="font-dm text-foreground/25 text-[11px] tracking-widest">
        © {new Date().getFullYear()} Yosr El Hamdouni
      </p>
    </footer>
  );
}
