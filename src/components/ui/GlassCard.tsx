import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`liquid-subcard ${className}`}
      whileHover={
        hover
          ? {
              borderColor: "rgba(0, 212, 255, 0.2)",
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.08), 0 8px 32px rgba(0, 0, 0, 0.3)",
              y: -4,
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
