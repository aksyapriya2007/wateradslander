import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({ value, suffix = "", duration = 2, className = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });
  const motionValue = useMotionValue(0);
  
  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration, ease: "easeOut" });
      return controls.stop;
    } else {
      motionValue.set(0);
    }
  }, [inView, motionValue, value, duration]);

 const display = useTransform(motionValue, (current) => Math.floor(current) + suffix);

 return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
