"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const techMap = {
  "AI-Powered E-commerce Platform & Courier App": ["Python", "ML", "Next.js", "Node.js", "PostgreSQL"],
  "AI & Computer Vision Applications": ["Python", "OpenCV", "Raspberry Pi", "Computer Vision"],
  "Desktop Business Management Application": ["Electron", "Node.js", "Express"],
  "Smart Farming Application": ["Java", "IoT", "Arduino"],
};

const ProjectLayout = ({ name, description, date, demoLink }) => {
  const tags = techMap[name] ?? [];

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="w-full relative"
    >
      <Link
        href={demoLink}
        target="_blank"
        className="group block w-full relative rounded-2xl overflow-hidden custom-bg p-5 md:p-7 hover-glow transition-all duration-300"
        aria-label={name}
      >
        {/* Shimmer sweep on hover */}
        <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(254,254,91,0.04) 50%, transparent 60%)",
          }}
        />

        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-foreground font-semibold text-sm md:text-base group-hover:text-accent transition-colors duration-200 truncate">
              {name}
            </h2>
            <p className="text-foreground/50 text-xs mt-1 line-clamp-2">{description}</p>
          </div>
          <span className="flex-shrink-0 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center text-foreground/40 group-hover:text-accent group-hover:border-accent/60 group-hover:shadow-[0_0_12px_rgba(254,254,91,0.3)] transition-all duration-300">
            <ExternalLink size={14} strokeWidth={1.5} />
          </span>
        </div>

        {/* Divider */}
        <div className="my-4 h-px"
          style={{ background: "linear-gradient(90deg, rgba(254,254,91,0.2), transparent)" }} />

        {/* Bottom row */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[10px] border border-accent/20 bg-accent/5 text-foreground/60 group-hover:border-accent/40 group-hover:text-foreground/80 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Date */}
          <p className="text-foreground/30 text-xs font-mono flex-shrink-0">
            {new Date(date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectLayout;
