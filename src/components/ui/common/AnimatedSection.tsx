'use client'

import { motion } from 'framer-motion'
import { containerAnimation, fadeInUp } from '@/lib/animations'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerAnimation}
      className={className}
      transition={{ delay }}
    >
      <motion.div variants={fadeInUp}>
        {children}
      </motion.div>
    </motion.section>
  )
} 