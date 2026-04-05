"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = ""
}: ScaleInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.95
      }}
      animate={isInView ? {
        opacity: 1,
        scale: 1
      } : {
        opacity: 0,
        scale: 0.95
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
