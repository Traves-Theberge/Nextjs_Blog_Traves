'use client'

import { motion } from 'framer-motion'
import { Typography } from '@/components/ui/common/Typography'
import { Container } from '@/components/ui/common/Container'
import { Section } from '@/components/ui/common/Section'
import { fadeInUp, slideInFromLeft } from '@/lib/animations'
import { skills } from '@/data/skills'
import { SkillCard } from '@/components/ui/common/SkillCard'
import type { Skill } from '@/types/skills'

export function SkillsSection() {
  return (
    <Section 
      size="xl"
      className="flex items-center justify-center w-full py-16"
    >
      <Container className="max-w-7xl w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          {/* Section Header */}
          <motion.div 
            variants={fadeInUp}
            className="text-center space-y-4 mb-16"
          >
            <Typography 
              variant="h2" 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent
                bg-gradient-to-r from-[#5E3AEE] to-[#C56BF0]"
            >
              Technical Expertise
            </Typography>
            <Typography className="text-gray-400 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for building modern digital solutions
            </Typography>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={slideInFromLeft}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {skills.map((skill: Skill, index: number) => (
              <SkillCard key={skill.category} skill={skill} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
} 