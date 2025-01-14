'use client'

import { motion } from 'framer-motion'
import { Typography } from '@/components/ui/common/Typography'
import { Container } from '@/components/ui/common/Container'
import { Section } from '@/components/ui/common/Section'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaSquareXTwitter } from "react-icons/fa6"
import { SocialLink } from '@/components/ui/common/SocialLink'
import { fadeInUp } from '@/lib/animations'

const socialLinks = [
  {
    icon: FiMail,
    href: 'mailto:traves.theberge@gmail.com',
    label: 'Email Contact'
  },
  {
    icon: FiLinkedin,
    href: 'https://linkedin.com/in/traves-theberge',
    label: 'LinkedIn Profile'
  },
  {
    icon: FiGithub,
    href: 'https://github.com/Traves-Theberge',
    label: 'GitHub Profile'
  },
  {
    icon: FaSquareXTwitter,
    href: 'https://x.com/Traves_Theberge',
    label: 'X (Twitter) Profile'
  }
]

export function ContactSection() {
  return (
    <Section 
      id="contact" 
      className="min-h-[75vh] flex items-center justify-center py-12 md:py-16"
    >
      <Container className="flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-2xl w-full text-center"
        >
          <Typography 
            variant="h2" 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
              dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 
              bg-clip-text text-transparent"
          >
            Let's Connect
          </Typography>
          <Typography 
            variant="large" 
            className="text-gray-700 dark:text-gray-300 mb-8"
          >
            Interested in collaborating or learning more about my work? Let's discuss how we can work together to create meaningful impact.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.href}
                {...link}
                className="w-full py-3 px-4 rounded-2xl bg-white/5 dark:bg-gray-800/50 
                  backdrop-blur-sm border border-gray-200 dark:border-gray-700
                  hover:border-blue-500 dark:hover:border-blue-400
                  group transition-all duration-300"
              >
                <span className="text-gray-900 dark:text-gray-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {link.label}
                </span>
              </SocialLink>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
} 