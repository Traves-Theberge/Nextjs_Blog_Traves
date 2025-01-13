"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomPointer: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [clicks, setClicks] = useState<number[]>([]);

  const springConfig = { damping: 20, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleClick = (e: MouseEvent) => {
      setClicks((prev) => [...prev, Date.now()]);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', handleClick);
    };
  }, [mouseX, mouseY]);

  const handleAnimationComplete = (id: number) => {
    setClicks((prev) => prev.filter((clickId) => clickId !== id));
  };

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div className="relative">
          {/* Outer Circle */}
          <div className="absolute h-8 w-8 rounded-full border-2 border-white animate-pulse-slow" />
          {/* Inner Dot */}
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          {/* Click Ripple Effect */}
          <AnimatePresence>
            {clicks.map((id) => (
              <motion.div
                key={id}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border-2 border-white"
                onAnimationComplete={() => handleAnimationComplete(id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default CustomPointer; 