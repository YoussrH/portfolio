"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectLayout = ({ name, description, date, demoLink, tags = [] }) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="w-full relative"
    >
      <Link
        href={demoLink}
        target="_blank"
        className="group block w-full relative rounded-2xl overflow-hidden custom-bg p-5 md:p-6 hover-glow transition-all duration-300"
        aria-label={name}
      >
        {/* Shimmer sweep */}
        <span
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(254,254,91,0.04) 50%, transparent 60%)",
          }}
        />

        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="font-cormorant font-semibold text-base md:text-lg text-foreground group-hover:text-accent transition-colors duration-200 leading-snug">
              {name}
            </h2>
            <p className="font-dm text-foreground/50 text-xs mt-1 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
          <span className="flex-shrink-0 w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center text-foreground/40 group-hover:text-accent group-hover:border-accent/60 group-hover:shadow-[0_0_12px_rgba(254,254,91,0.3)] transition-all duration-300">
            <ExternalLink size={14} strokeWidth={1.5} />
          </span>
        </div>

        {/* Divider */}
        <div
          className="my-3 h-px"
          style={{
            background:
              "linear-gradient(90deg, rgba(254,254,91,0.2), transparent)",
          }}
        />

        {/* Bottom row */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-dm px-2 py-0.5 rounded-full text-[10px] border border-accent/20 bg-accent/5 text-foreground/60 group-hover:border-accent/40 group-hover:text-foreground/80 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="font-dm text-foreground/30 text-[11px] flex-shrink-0">
            {new Date(date).toLocaleDateString("en-GB", {
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectLayout;
