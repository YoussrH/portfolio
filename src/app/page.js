"use client";
import { motion } from "framer-motion";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Avatar from "@/components/models/Avatar";
import "./fonts.css";

/* ─── animation variants ────────────────────────────────── */

const slideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
});

const slideIn = (delay = 0) => ({
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

const lineReveal = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 1.3 } },
};

const badgeItem = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "backOut" },
  },
};

const badges = [
  "AI & Machine Learning",
  "IoT & Embedded Systems",
  "Full-Stack Dev",
  "Computer Vision",
];

/* ─── component ─────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">

      {/* Radial spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 60% 55%, rgba(254,254,91,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Subtle dot-grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(254,254,91,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.35,
        }}
      />

      <div className="w-full h-screen relative">

        {/* ── Hero text block — left side ── */}
        <div className="absolute bottom-12 left-6 xs:left-10 lg:left-14 z-20 max-w-md lg:max-w-lg">

          {/* Eyebrow label */}
          <motion.p
            variants={slideIn(0.2)}
            initial="hidden"
            animate="visible"
            className="font-dm text-[11px] xs:text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4 flex items-center gap-2"
          >
            <span className="inline-block w-5 h-px bg-accent/60" />
            Portfolio
          </motion.p>

          {/* Name — Cormorant Garamond for elegance */}
          <motion.h1
            variants={slideUp(0.35)}
            initial="hidden"
            animate="visible"
            className="font-cormorant font-semibold leading-[1.05] text-5xl xs:text-6xl lg:text-8xl"
            style={{
              background:
                "linear-gradient(135deg, #FEFE5B 0%, #DEAA44 45%, #FFD861 80%, #FEFE5B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 24px rgba(254,254,91,0.25))",
            }}
          >
            Yosr
            <br />
            <span className="font-light italic">El Hamdouni</span>
          </motion.h1>

          {/* Animated accent line */}
          <motion.div
            variants={lineReveal}
            initial="hidden"
            animate="visible"
            className="origin-left mt-5 mb-5 h-px w-52"
            style={{
              background:
                "linear-gradient(90deg, rgba(254,254,91,0.9), rgba(222,170,68,0.4), transparent)",
            }}
          />

          {/* Title */}
          <motion.p
            variants={slideUp(0.65)}
            initial="hidden"
            animate="visible"
            className="font-dm font-light text-foreground/60 text-sm xs:text-base tracking-[0.2em] uppercase"
          >
            AI &amp; IoT Master&apos;s Student
          </motion.p>

          {/* Badges */}
          <motion.div
            variants={badgeContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 mt-5"
          >
            {badges.map((b) => (
              <motion.span key={b} variants={badgeItem} className="skill-tag font-dm">
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
