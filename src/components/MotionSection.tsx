"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

type MotionSectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function MotionSection({ id, className, children }: MotionSectionProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={`motion-section ${className ?? ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
