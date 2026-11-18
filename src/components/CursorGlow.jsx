"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full z-[99999] hidden md:block"
        style={{
          background: "#FEFE5B",
          boxShadow: "0 0 8px #FEFE5B, 0 0 16px rgba(254,254,91,0.5)",
          transition: "transform 0.05s linear",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ring}
        className="pointer-events-none fixed top-0 left-0 w-10 h-10 rounded-full z-[99998] hidden md:block"
        style={{
          border: "1px solid rgba(254,254,91,0.4)",
          transition: "transform 0.15s ease-out",
        }}
      />
    </>
  );
}
