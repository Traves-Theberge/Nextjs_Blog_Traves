'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RotateInProps {
  children: ReactNode
  delay?: number
}

export const RotateIn = ({ children, delay = 0 }: RotateInProps) => {
  return (
    <motion.div
      initial={{ rotate: -10, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
} 