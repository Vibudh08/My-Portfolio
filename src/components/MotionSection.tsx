"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type MotionSectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function MotionSection({ id, className, children }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
