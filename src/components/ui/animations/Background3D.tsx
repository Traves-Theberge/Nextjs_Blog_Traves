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

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      // Increase particle count based on screen size
      const particleCount = Math.min(Math.floor((width * height) / 4000), 500);
      
      particlesRef.current = Array.from({ length: particleCount }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          position: new THREE.Vector3(x, y, 0),
          originalPosition: new THREE.Vector3(x, y, 0),
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 1,
            (Math.random() - 0.5) * 1,
            0
          ),
          size: Math.random() * 2 + 1,
          brightness: Math.random() * 0.5 + 0.5
        };
      });
    };

    const drawParticle = (particle: Particle) => {
      const gradient = ctx.createRadialGradient(
        particle.position.x, particle.position.y, 0,
        particle.position.x, particle.position.y, particle.size * 2
      );

      const color = resolvedTheme === 'dark' ? '59, 130, 246' : '37, 99, 235';
      gradient.addColorStop(0, `rgba(${color}, ${particle.brightness})`);
      gradient.addColorStop(1, `rgba(${color}, 0)`);

      ctx.beginPath();
      ctx.arc(particle.position.x, particle.position.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawConnections = () => {
      const maxDistance = width * 0.1; // Increased connection distance
      
      particlesRef.current.forEach((p1, i) => {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dx = p1.position.x - p2.position.x;
          const dy = p1.position.y - p2.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = Math.pow(1 - distance / maxDistance, 2) * 0.5;
            const color = resolvedTheme === 'dark' ? '59, 130, 246' : '37, 99, 235';
            ctx.beginPath();
            ctx.moveTo(p1.position.x, p1.position.y);
            ctx.lineTo(p2.position.x, p2.position.y);
            ctx.strokeStyle = `rgba(${color}, ${opacity})`;
            ctx.lineWidth = Math.min(opacity * 2, 0.5);
            ctx.stroke();
          }
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach(particle => {
        // Enhanced mouse interaction
        const dx = mouseRef.current.x - particle.position.x;
        const dy = mouseRef.current.y - particle.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const mouseRadius = 200; // Increased mouse influence radius

        if (distance < mouseRadius) {
          const force = (1 - distance / mouseRadius) * 2;
          particle.velocity.x -= (dx / distance) * force;
          particle.velocity.y -= (dy / distance) * force;
        }

        // Spring force to original position
        const springForce = 0.01;
        particle.velocity.x += (particle.originalPosition.x - particle.position.x) * springForce;
        particle.velocity.y += (particle.originalPosition.y - particle.position.y) * springForce;

        // Update position with velocity
        particle.velocity.multiplyScalar(0.98); // Damping
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