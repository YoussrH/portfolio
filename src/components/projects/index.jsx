"use client";
import React from "react";
import ProjectLayout from "./ProjectLayout";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <div className="w-full max-w-2xl xl:max-w-3xl px-4 mx-auto lg:px-10 py-6">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="w-8 h-px" style={{ background: "rgba(254,254,91,0.7)" }} />
          <h1 className="font-lamoric text-ort text-xl md:text-2xl uppercase tracking-widest font-bold">
            Projects
          </h1>
          <span className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(254,254,91,0.4), transparent)" }} />
        </div>
        <p className="font-lamoric text-foreground/50 text-sm ml-12">
          A selection of things I&apos;ve built — from AI systems to full-stack applications.
        </p>
      </motion.div>

      {/* Project cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4 md:space-y-5"
      >
        {projects.map((project, index) => (
          <ProjectLayout {...project} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectList;
