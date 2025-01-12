'use client'

import { useTheme } from 'next-themes'
import { Button } from '../Button'
import { FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="relative w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{
            scale: resolvedTheme === 'dark' ? 0 : 1,
            opacity: resolvedTheme === 'dark' ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-yellow-500"
        >
          <FiSun className="w-full h-full" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: resolvedTheme === 'dark' ? 1 : 0,
            opacity: resolvedTheme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-blue-400"
        >
          <FiMoon className="w-full h-full" />
        </motion.div>
      </div>
    </Button>
  )
} 