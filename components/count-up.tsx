"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

type CountUpProps = {
  value: number;
  suffix?: string;
  minimumIntegerDigits?: number;
  label?: string;
};

export function CountUp({
  value,
  suffix = "",
  minimumIntegerDigits = 1,
  label,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(value);
  const formattedCount = useTransform(count, (latest) => {
    const integer = Math.floor(latest).toString().padStart(minimumIntegerDigits, "0");
    return `${integer}${suffix}`;
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      count.set(value);
      return;
    }

    if (!isInView) return;

    count.set(0);
    const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
    return () => controls.stop();
  }, [count, isInView, shouldReduceMotion, value]);

  return (
    <motion.span ref={ref} aria-label={label ?? `${value}${suffix}`}>
      {formattedCount}
    </motion.span>
  );
}
