"use client";
import { motion } from "framer-motion";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Avatar from "@/components/models/Avatar";
import "./fonts.css";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.8, duration: 0.8, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 1 + i * 0.12, duration: 0.4, ease: "backOut" },
  }),
};

const badges = [
  "AI & Machine Learning",
  "IoT & Embedded Systems",
  "Full-Stack Dev",
  "Computer Vision",
];

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden"
      style={{ fontFamily: "Lamoric Rowen" }}
    >
      {/* Radial spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(254,254,91,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(254,254,91,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(254,254,91,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-full h-screen relative">
        {/* Hero text — bottom-left */}
        <div className="absolute bottom-10 left-6 xs:left-10 lg:left-16 z-20 max-w-lg">
          {/* Name */}
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-lamoric text-4xl xs:text-5xl lg:text-7xl font-bold gradient-text leading-tight"
          >
            Yosr
            <br />
            El Hamdouni
          </motion.h1>

          {/* Accent line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="origin-left mt-3 mb-4 h-px w-48"
            style={{
              background:
                "linear-gradient(90deg, rgba(254,254,91,0.8), transparent)",
            }}
          />

          {/* Title */}
          <motion.p
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-lamoric font-light text-foreground/70 text-sm xs:text-base lg:text-lg tracking-widest uppercase"
          >
            AI &amp; IoT Master&apos;s Student
          </motion.p>

          {/* Badges */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 mt-5"
          >
            {badges.map((b, i) => (
              <motion.span
                key={b}
                custom={i}
                variants={badgeVariants}
                className="skill-tag"
              >
                {b}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* 3D Avatar */}
        <Navigation />
        <RenderModel>
          <Avatar />
        </RenderModel>
      </div>
    </main>
  );
}
