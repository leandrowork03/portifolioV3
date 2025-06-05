import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        top: 0,
        left: 0,
        // Não precisa de left/top porque Framer Motion controla via x,y
        transformOrigin: "center",
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderBottom: "20px solid cyan",
          filter: "drop-shadow(0 0 5px cyan) drop-shadow(0 0 10px cyan)",
          transform: "rotate(-25deg)",
        }}
      />
    </motion.div>
  );
}
