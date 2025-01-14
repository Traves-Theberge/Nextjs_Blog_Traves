'use client'

import { motion } from 'framer-motion'
import { Typography } from '@/components/ui/common/Typography'
import { Container } from '@/components/ui/common/Container'
import { Section } from '@/components/ui/common/Section'
import { fadeInUp } from '@/lib/animations'
import Image from 'next/image'

export function HeroSection() {
  return (
    <Section 
      size="xl"
      className="flex items-center justify-center w-full py-6"
    >
      <Container className="max-w-7xl w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start justify-items-start"
        >
          {/* Content side */}
          <motion.div 
            variants={fadeInUp} 
            className="space-y-6 w-full pt-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Typography 
                variant="h1"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
                  dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 
                  bg-clip-text text-transparent text-6xl md:text-7xl lg:text-8xl 
                  font-bold tracking-tight leading-none pl-4"
              >
                About Me
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeInUp}
              className="relative p-6 rounded-3xl overflow-hidden group"
            >
              <motion.div 
                className="absolute inset-0 bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm rounded-3xl"
              />
              <Typography 
                variant="large" 
                className="text-gray-700 dark:text-gray-300 text-l md:text-2xl 
                  leading-relaxed relative z-10"
              >
                Hi, My name is Traves Theberge 👋. 
                I'm an AI Solutions Architect, Web & Software Developer, and Indigenous Technology Advocate. I build scalable,
                impactful solutions using AI integration, prompt engineering, and web development to help organizations streamline
                workflows, adapt to change, and build for the future.  Driven by inclusivity and long-term impact, I leverage technology
                for progress. Let's connect and create innovative solutions together!
              </Typography>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={fadeInUp}
            className="relative w-full aspect-square max-w-[600px] rounded-[2.5rem] overflow-hidden
              shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10
              transform md:-translate-y-12"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
          >
            <Image
              src="/images/profile.webp"
              alt="Traves Theberge - Full Stack Developer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
} 