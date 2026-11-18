"use client";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

const NavLink = motion(Link);

const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(254,254,91,0.3)" }}
      whileTap={{ scale: 0.95 }}
      href="/"
      target="_self"
      className="text-foreground rounded-full flex items-center justify-center
        custom-bg hover-glow fixed top-4 left-4 w-fit self-start z-50 transition-all duration-300"
      aria-label="home"
      name="home"
      prefetch={false}
    >
      <span className="relative w-12 h-12 xs:w-14 xs:h-14 p-3 xs:p-4 hover:text-accent transition-colors duration-200">
        <Home className="w-full h-auto" strokeWidth={1.5} />
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background border border-accent/20 font-dm text-foreground text-xs rounded-lg shadow-glass-sm whitespace-nowrap z-50">
          Home
        </span>
      </span>
      <span className="sr-only">Go to Home Page</span>
    </NavLink>
  );
};

export default HomeBtn;
