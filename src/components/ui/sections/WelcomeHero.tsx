"use client";

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'
import { Typography } from '../common/Typography'
import { Container } from '../common/Container'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FiArrowRight } from 'react-icons/fi'

export function WelcomeHero() {
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const timeline = anime.timeline({
      easing: 'easeOutExpo',
    })

    timeline
      .add({
        targets: '.hero-glow',
        scale: [0.5, 1],
        opacity: [0, 0.5],
        duration: 1500,
      })
      .add({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutElastic(1, .8)',
      }, '-=1000')
      .add({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
      }, '-=500')
      .add({
        targets: '.hero-buttons',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
      }, '-=400')
  }, [])

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative pb-0">
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square">
          <div className={`absolute inset-0 rounded-full blur-3xl opacity-20 
            ${resolvedTheme === 'dark' 
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' 
              : 'bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40'
            }`}
          />
        </div>
      </div>

      <Container className="px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <div ref={titleRef} className="space-y-4">
            <Typography 
              variant="h1" 
              className={`flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]
                ${resolvedTheme === 'dark'
                  ? 'bg-gradient-to-r from-white via-blue-400 to-white'
                  : 'bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900'
                } bg-clip-text text-transparent`}
            >
              <span>Crafting digital</span>
              <span>experiences</span>
              <span>that matter.</span>
            </Typography>
          </div>

          <div ref={subtitleRef}>
            <Typography 
              className={`text-xl md:text-2xl lg:text-3xl font-medium
                ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Transforming ideas into seamless, engaging digital solutions.
            </Typography>
          </div>

          <motion.div
            className="hero-buttons flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              href="/work"
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white 
                overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-700 before:via-purple-700 before:to-blue-700
                before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
            >
              <span className="relative flex items-center gap-2 font-medium">
                View My Work
                <FiArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/about#contact"
              className={`group relative px-8 py-4 rounded-2xl border-2 font-medium
                overflow-hidden transition-all duration-300 hover:scale-105
                ${resolvedTheme === 'dark' 
                  ? 'border-gray-700 text-gray-300 hover:text-white hover:border-blue-500' 
                  : 'border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-500'
                }
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-blue-500/10 before:to-transparent
                before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100`}
            >
              <span className="relative">
                Get in Touch
              </span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
