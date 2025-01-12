"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import anime from 'animejs';

const AboutAnimation: React.FC = () => {
  // Reference to the container for animation targeting
  const animationRef = useRef(null);

  useEffect(() => {
    // Get all paragraph elements for staggered animation
    const paragraphs = document.querySelectorAll('.about-paragraph');
    
    // Create an animation timeline for sequential animations
    anime.timeline({
      easing: 'easeOutExpo', // Smooth exponential easing
    })
    // Fade in the container
    .add({
      targets: animationRef.current,
      opacity: [0, 1], // Animate from invisible to visible
      duration: 1000,
    })
    // Animate the title with slide up and fade
    .add({
      targets: '.about-title',
      opacity: [0, 1],
      duration: 800,
      translateY: [50, 0], // Slide up from 50px below
    })
    // Animate paragraphs with 3D rotation and stagger
    .add({
      targets: paragraphs,
      opacity: [0, 1],
      rotateX: [90, 0],    // 3D flip animation
      translateY: [50, 0],  // Slide up while flipping
      duration: 1000,
      delay: anime.stagger(200), // 200ms delay between each paragraph
      easing: 'easeOutElastic(1, .8)', // Bouncy elastic effect
    });
  }, []); // Run once on mount

  return (
    <div 
      ref={animationRef} 
      className="flex flex-col items-center justify-center h-full p-4 text-center overflow-auto"
    >
      <h1 className="about-title text-4xl font-bold mb-6">About Me</h1>
      <div className="text-lg max-w-3xl space-y-4">
        <p className="about-paragraph">
          Hi there! I'm <Link 
            href="https://registry.jsonresume.org/Traves-Theberge" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Traves Theberge
          </Link>, a systems professional with over a decade of experience in automation, 
          control systems design, installation, programming, and technical project management.
        </p>
        <p className="about-paragraph">
          My expertise lies in optimizing system performance, ensuring compliance with 
          industry standards, and utilizing advanced technologies to enhance operational efficiency.
        </p>
        <p className="about-paragraph">
          In addition to my technical career, I am dedicated to using technology in innovative ways. 
          This blog is where I document my journey toward becoming a software developer.
        </p>
        <p className="about-paragraph">
          I'll be sharing my projects in software development, focusing on the integration 
          of AI and automation, as I navigate this exciting field.
        </p>
      </div>
    </div>
  );
};

export default AboutAnimation;