"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={clsx(
        "custom-bg hover-glow p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
