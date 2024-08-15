"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const WelcomeAnimation: React.FC = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const animation = anime.timeline({
      targets: animationRef.current,
      easing: 'easeOutExpo',
    });

    animation
      .add({
        scale: [0, 1],
        opacity: [0, 1],
        duration: 1000,
      })
      .add({
        targets: '.letter',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(100),
      })
      .add({
        targets: '.subtitle',
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 800,
      });
  }, []);

  return (
    <div ref={animationRef} className="text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {'Welcome To My Blog '.split(' ').map((word, index) => (
          <span key={index} className="inline-block mr-2">
            {word.split('').map((letter, letterIndex) => (
              <span key={letterIndex} className="letter inline-block">
                {letter}
              </span>
            ))}
          </span>
        ))}
      </h1>
      <p className="subtitle text-lg sm:text-xl md:text-2xl">Follow my journey in web development and design</p>
    </div>
  );
};

export default WelcomeAnimation;