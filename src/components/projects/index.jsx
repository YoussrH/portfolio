"use client";
import React from "react";
import ProjectLayout from "./ProjectLayout";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <div className="w-full max-w-2xl xl:max-w-3xl px-4 mx-auto lg:px-10 py-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-4 mb-3">
          <span
            className="w-8 h-px flex-shrink-0"
            style={{ background: "rgba(254,254,91,0.7)" }}
          />
          <h1 className="font-cormorant text-ort text-2xl md:text-3xl uppercase tracking-widest font-semibold">
            Projects
          </h1>
          <span
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(254,254,91,0.4), transparent)",
            }}
          />
        </div>
        <p className="font-dm text-foreground/40 text-sm ml-12">
          {projects.length} projects — from AI systems to full-stack applications.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {projects.map((project, index) => (
          <ProjectLayout {...project} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectList;
