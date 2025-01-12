'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode } from 'react'

interface ParallaxProps {
  children: ReactNode
  offset?: number
}

export const Parallax = ({ children, offset = 50 }: ParallaxProps) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, offset])

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  )
} 