import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.8 } },
};

interface AnimatedSectionProps {
  children: ReactNode;
}

export function AnimatedSection({ children }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <AnimatePresence mode="wait">
      {isInView && (
        <motion.section
          ref={ref}
          variants={sectionAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-screen min-h-screen flex items-center justify-center relative"
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
}
