"use client";
import { motion } from "framer-motion";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import Avatar from "@/components/models/Avatar";
import "./fonts.css";

/* ── animation variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const lineReveal = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.75, duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgePop = {
  hidden: { opacity: 0, scale: 0.75, y: 10 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 1.1 + i * 0.1,
      duration: 0.45,
      ease: [0.34, 1.56, 0.64, 1],
    },
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
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">

      {/* ── Radial spotlight ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 65% 55%, rgba(254,254,91,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Subtle dot-grid ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(254,254,91,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full h-screen relative">

        {/* ── Hero text — bottom-left ── */}
        <div className="absolute bottom-10 left-6 xs:left-12 lg:left-20 z-20 max-w-md pointer-events-none">

          {/* Eyebrow */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body text-xs tracking-[0.3em] uppercase text-accent/70 mb-4 font-medium"
          >
            Portfolio · AI &amp; IoT
          </motion.p>

          {/* Name */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display leading-[1.05] gradient-text"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", fontWeight: 600 }}
          >
            Yosr
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>
              El Hamdouni
            </span>
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

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body font-light text-foreground/55 text-sm xs:text-base tracking-[0.2em] uppercase"
          >
            Master&apos;s Student · Tunis, Tunisia
          </motion.p>

          {/* Skill badges */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 mt-6 pointer-events-auto"
          >
            {badges.map((b, i) => (
              <motion.span
                key={b}
                custom={i}
                variants={badgePop}
                className="skill-tag font-body text-[11px] tracking-wide"
              >
                {b}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ── Navigation ring — pushed right ── */}
        <Navigation />

        {/* ── 3D Avatar ── */}
        <RenderModel>
          <Avatar />
        </RenderModel>
      </div>
    </main>
  );
}
