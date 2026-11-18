"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#030014] flex flex-col items-center justify-center text-center px-6 gap-6">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-dm text-xs tracking-[0.3em] uppercase text-foreground/40"
      >
        Error 404
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-cormorant font-semibold text-7xl xs:text-8xl"
        style={{
          background: "linear-gradient(135deg, #FEFE5B 0%, #DEAA44 45%, #FFD861 80%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 0 24px rgba(254,254,91,0.25))",
        }}
      >
        Page Not Found
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="origin-center h-px w-32 mx-auto"
        style={{ background: "linear-gradient(90deg, transparent, rgba(254,254,91,0.6), transparent)" }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="font-dm text-foreground/50 text-sm max-w-sm"
      >
        This page doesn&apos;t exist. Head back home.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          href="/"
          className="font-dm text-sm px-6 py-3 rounded-xl border border-accent/40 bg-accent/5 text-foreground hover:bg-accent/10 hover:border-accent/70 hover:text-accent transition-all duration-200 inline-flex items-center gap-2"
        >
          ← Back Home
        </Link>
      </motion.div>
    </main>
  );
}
