"use client";

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useTheme } from 'next-themes';
import debounce from 'lodash/debounce';
import anime from 'animejs';

const Background3D: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

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
    if (!containerRef.current) return;

    const container = containerRef.current;
    const starsCount = 200;

    // Clear existing stars
    container.innerHTML = '';

    // Create stars
    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.setProperty('--size', `${Math.random() * 3 + 1}px`);
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty('--speed', `${Math.random() * 10 + 5}s`);
      container.appendChild(star);
    }

    // Animate background
    const targetColor = resolvedTheme === 'dark' ? '#111827' : '#f3f4f6';
    anime({
      targets: container,
      backgroundColor: targetColor,
      duration: 1000,
      easing: 'easeInOutQuad',
      complete: () => setIsLoading(false)
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [resolvedTheme, handleMouseMove]);

  if (isLoading) {
    return <div className="fixed inset-0 bg-gray-900 dark:bg-gray-100" />;
  }

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 overflow-hidden transition-colors duration-1000 ${
        resolvedTheme === 'dark' ? 'bg-gray-900 dark' : 'bg-gray-100 light'
      }`}
    />
  );
});

export default Background3D;