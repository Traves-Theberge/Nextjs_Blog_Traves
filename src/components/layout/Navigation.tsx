'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/common/Logo'
import { ThemeToggle } from '@/components/ui/common/ThemeToggle'
import { Container } from '@/components/ui/common/Container'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiHome, FiBookOpen, FiBriefcase, FiUser, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { SocialLinks } from '../ui/common/SocialLinks'

const navLinks = [
  { href: '/', label: 'Home', icon: <FiHome className="w-4 h-4" /> },
  { href: '/blog', label: 'Blog', icon: <FiBookOpen className="w-4 h-4" /> },
  { href: '/work', label: 'Projects', icon: <FiBriefcase className="w-4 h-4" /> },
  { href: '/about', label: 'About', icon: <FiUser className="w-4 h-4" /> }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <Container className="px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 text-sm font-medium rounded-2xl transition-all duration-300
                    ${pathname === href
                      ? 'bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }
                    hover:scale-105
                  `}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <SocialLinks />
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 ml-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          >
            <Container className="px-6 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 flex items-center gap-3
                      ${pathname === href
                        ? 'bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }
                      hover:scale-105
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {icon}
                    {label}
                  </Link>
                ))}
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <SocialLinks />
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 