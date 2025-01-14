"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  originalPosition: THREE.Vector3;
  size: number;
  brightness: number;
}

const Background3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const isMobileRef = useRef(false);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    mouseRef.current = {
      x: event.clientX,
      y: event.clientY
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    let width = window.innerWidth;
    let height = window.innerHeight;

    isMobileRef.current = window.innerWidth <= 768;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      isMobileRef.current = width <= 768;
      initParticles();
    };

    const initParticles = () => {
      // Dramatically increase particle count
      const baseCount = isMobileRef.current ? 600 : 400;
      const particleCount = Math.min(Math.floor((width * height) / (isMobileRef.current ? 2000 : 2500)), baseCount);
      
      particlesRef.current = Array.from({ length: particleCount }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          position: new THREE.Vector3(x, y, 0),
          originalPosition: new THREE.Vector3(x, y, 0),
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * (isMobileRef.current ? 2 : 1.5), // More dynamic movement
            (Math.random() - 0.5) * (isMobileRef.current ? 2 : 1.5),
            0
          ),
          size: Math.random() * (isMobileRef.current ? 2.5 : 2) + 1, // Slightly smaller for more particles
          brightness: Math.random() * 0.4 + 0.6 // Adjusted brightness range
        };
      });
    };

    const drawParticle = (particle: Particle) => {
      const gradient = ctx.createRadialGradient(
        particle.position.x, particle.position.y, 0,
        particle.position.x, particle.position.y, particle.size * 2.5 // Larger glow effect
      );

      const color = resolvedTheme === 'dark' ? '59, 130, 246' : '37, 99, 235';
      gradient.addColorStop(0, `rgba(${color}, ${particle.brightness})`);
      gradient.addColorStop(0.6, `rgba(${color}, ${particle.brightness * 0.5})`); // Softer glow
      gradient.addColorStop(1, `rgba(${color}, 0)`);

      ctx.beginPath();
      ctx.arc(particle.position.x, particle.position.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawConnections = () => {
      // Reduced connection distance
      const maxDistance = isMobileRef.current ? 150 : 120;
      
      particlesRef.current.forEach((p1, i) => {
        // Fewer connections per particle
        const connectionLimit = isMobileRef.current ? 
          Math.min(particlesRef.current.length, 6) : // Reduced from 15
          Math.min(particlesRef.current.length, 8);

        // Only connect to closest particles
        const nearbyParticles = particlesRef.current
          .slice(i + 1)
          .filter(p2 => {
            const dx = p1.position.x - p2.position.x;
            const dy = p1.position.y - p2.position.y;
            return Math.sqrt(dx * dx + dy * dy) < maxDistance;
          })
          .slice(0, connectionLimit);

        nearbyParticles.forEach(p2 => {
          const dx = p1.position.x - p2.position.x;
          const dy = p1.position.y - p2.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const opacity = Math.pow(1 - distance / maxDistance, 1.5) * (isMobileRef.current ? 0.7 : 0.5);
          const color = resolvedTheme === 'dark' ? '59, 130, 246' : '37, 99, 235';
          ctx.beginPath();
          ctx.moveTo(p1.position.x, p1.position.y);
          ctx.lineTo(p2.position.x, p2.position.y);
          ctx.strokeStyle = `rgba(${color}, ${opacity})`;
          ctx.lineWidth = isMobileRef.current ? 0.8 : 0.5; // Slightly thinner lines
          ctx.stroke();
        });
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach(particle => {
        // Adjust mouse interaction radius for mobile
        const mouseRadius = isMobileRef.current ? 150 : 200;
        const dx = mouseRef.current.x - particle.position.x;
        const dy = mouseRef.current.y - particle.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const force = (1 - distance / mouseRadius) * (isMobileRef.current ? 1 : 2);
          particle.velocity.x -= (dx / distance) * force;
          particle.velocity.y -= (dy / distance) * force;
        }

        // Adjust spring force for mobile
        const springForce = isMobileRef.current ? 0.02 : 0.01;
        particle.velocity.x += (particle.originalPosition.x - particle.position.x) * springForce;
        particle.velocity.y += (particle.originalPosition.y - particle.position.y) * springForce;

        // Adjust damping for mobile
        particle.velocity.multiplyScalar(isMobileRef.current ? 0.95 : 0.98);
        particle.position.add(particle.velocity);

        drawParticle(particle);
      });

      drawConnections();
      frameRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [resolvedTheme, handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 transition-colors duration-700"
      style={{ 
        background: resolvedTheme === 'dark' 
          ? 'linear-gradient(to bottom, #0a0f1c, #111827)' 
          : 'linear-gradient(to bottom, #f8fafc, #f1f5f9)'
      }}
    />
  );
};

export default Background3D;