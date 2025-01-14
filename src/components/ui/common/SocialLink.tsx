'use client'

import { motion } from 'framer-motion'
import { SocialLink as SocialLinkType } from '@/types/social'
import { ReactNode } from 'react'

interface SocialLinkProps extends SocialLinkType {
  className?: string
  children?: ReactNode
}

export function SocialLink({ icon: Icon, href, label, className, children }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative z-10 flex flex-col items-center gap-4 text-gray-600 dark:text-gray-300
        transition-colors group-hover:text-gray-900 dark:group-hover:text-white ${className || ''}`}
    >
      <div className="p-4 rounded-xl bg-white/10 dark:bg-gray-800/10 group-hover:bg-white/20 
        dark:group-hover:bg-gray-800/20 transition-colors">
        <Icon className="w-8 h-8" />
      </div>
      {children || <span className="font-medium text-lg">{label}</span>}
    </motion.a>
  )
} 