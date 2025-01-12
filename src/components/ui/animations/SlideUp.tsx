'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideUpProps {
  children: ReactNode
  delay?: number
}

export const SlideUp = ({ children, delay = 0 }: SlideUpProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
} 