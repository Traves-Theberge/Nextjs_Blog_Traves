'use client'

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaSquareXTwitter } from "react-icons/fa6"
import { motion } from 'framer-motion'

const socialLinks = [
  {
    href: 'https://github.com/Traves-Theberge',
    label: 'GitHub',
    icon: <FiGithub className="w-5 h-5" />
  },
  {
    href: 'https://x.com/Traves_Theberge',
    label: 'X (Twitter)',
    icon: <FaSquareXTwitter className="w-5 h-5" />
  },
  {
    href: 'https://www.linkedin.com/in/traves-theberge',
    label: 'LinkedIn',
    icon: <FiLinkedin className="w-5 h-5" />
  }
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.label}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  )
} 