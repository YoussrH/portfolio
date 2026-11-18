"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    /* Shift the whole orbit to the right:
       - large screens  → left: 65%
       - medium screens → left: 62%
       - small (orbit)  → left: 58%
       translateX(-50%) keeps it centred on that anchor point */
    <div
      className="fixed h-screen flex items-center justify-center"
      style={{
        left: isLarge ? "73%" : isMedium ? "70%" : "58%",
        top: 0,
        transform: "translateX(-50%)",
        width: "auto",
      }}
    >
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(28vw - 1rem)"
                  : "calc(38vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            /* Mobile: two columns on far right */
            <div className="fixed right-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-3"
              >
                {BtnList.map((btn) => (
                  <NavButton
                    key={btn.label}
                    x={0}
                    y={0}
                    {...btn}
                    labelDirection="left"
                  />
                ))}
              </motion.div>
            </div>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
