"use client";

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useTheme } from 'next-themes';
import debounce from 'lodash/debounce';

const Background3D: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  const handleMouseMove = useCallback(
    debounce((event: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = event;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    }, 10),
    []
  );

  useEffect(() => {
    const starsCount = 200;
    const newStars = Array.from({ length: starsCount }, (_, i) => (
      <div
        key={i}
        className="star"
        style={{
          '--size': `${Math.random() * 3 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          '--speed': `${Math.random() * 10 + 5}s`,
        } as React.CSSProperties}
      />
    ));
    setStars(newStars);

    const targetColor = resolvedTheme === 'dark' ? '#111827' : '#f3f4f6';
    containerRef.current.style.backgroundColor = targetColor;

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [resolvedTheme, handleMouseMove]);

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 overflow-hidden transition-colors duration-300 ease-in-out z-[-1] ${
        resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      {stars}
    </div>
  );
});

export default Background3D;