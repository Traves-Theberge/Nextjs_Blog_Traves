'use client'

import { motion } from 'framer-motion'
import { Typography } from '@/components/ui/common/Typography'
import { Container } from '@/components/ui/common/Container'
import { Section } from '@/components/ui/common/Section'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaSquareXTwitter } from "react-icons/fa6"
import { SocialLink } from '@/components/ui/common/SocialLink'

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
      size="xl"
      className="flex items-center justify-center w-full"
    >
      <Container className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r 
            from-gray-900/5 via-gray-900/10 to-gray-900/5 
            dark:from-white/5 dark:via-white/10 dark:to-white/5 
            backdrop-blur-xl p-12 md:p-16"
        >
          {/* Background Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full 
              bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
            <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full 
              bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          </div>

          <div className="relative z-10 space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Typography 
                  variant="h2" 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent
                    bg-gradient-to-r from-[#5E3AEE] to-[#C56BF0]"
                >
                  Let's Connect
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Typography 
                  className="text-gray-600 dark:text-gray-300 text-lg md:text-xl lg:text-2xl 
                    max-w-2xl mx-auto font-medium leading-relaxed px-4 md:px-6 
                    tracking-wide"
                >
                  Interested in collaborating or learning more about my work?{' '}
                  Let's discuss how we can work together to create meaningful impact.
                </Typography>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-gray-800/5 
                      backdrop-blur-lg p-6 transition-all duration-300
                      hover:bg-white/10 dark:hover:bg-gray-800/10
                      hover:shadow-xl hover:shadow-purple-500/10"
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <SocialLink {...link} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <Typography className="text-gray-500 dark:text-gray-400">
                Based in Quebec, Canada • Available Worldwide
              </Typography>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
} 