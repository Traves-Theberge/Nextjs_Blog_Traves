"use client";

import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const AboutAnimation: React.FC = () => {
  const animationRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const animation = anime.timeline({
      targets: animationRef.current,
      easing: 'easeOutExpo',
    });

    animation
      .add({
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
      })
      .add({
        targets: '.about-paragraph',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: anime.stagger(200),
        complete: () => setIsLoaded(true),
      });
  }, []);

  return (
    <div ref={animationRef} className={`flex flex-col items-center justify-center h-full p-4 text-center ${isLoaded ? 'overflow-auto' : 'overflow-hidden'}`}>
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="text-lg max-w-3xl space-y-4">
        <p className="about-paragraph">
          Hi there! I am Traves Theberge, a Canadian Indigenous professional passionate about technology and Indigenous language revitalization. My journey has taken me through various fields, from systems design and hardware installation to project management to language revitalization and cultural initiatives.
        </p>
        <p className="about-paragraph">
          This diverse experience has equipped me to tackle modern challenges with creativity and confidence. I'm deeply committed to preserving Indigenous languages and exploring how technology can support this mission. My work in different roles has shown me the powerful impact of combining cultural heritage with technological innovation.
        </p>
        <p className="about-paragraph">
          This blog is a space to share my journey toward becoming a software developer. I'll be documenting my progress, sharing insights, and exploring how we can use technology to build a more inclusive future.
        </p>
        <p className="about-paragraph">
          Join me as I navigate this exciting path, blending my technical skills with my passion for cultural heritage!
        </p>
      </div>
    </div>
  );
};

export default AboutAnimation;