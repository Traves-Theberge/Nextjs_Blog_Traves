'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Container } from '@/components/ui/common/Container'
import { Typography } from '@/components/ui/common/Typography'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  const { resolvedTheme } = useTheme()

  return (
    <Container className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h1" 
            className={`text-7xl md:text-8xl font-black
              ${resolvedTheme === 'dark' 
                ? 'text-white' 
                : 'text-gray-900'
              }
            `}
          >
            404
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <Typography 
            variant="h2" 
            className={`text-2xl md:text-3xl font-bold
              ${resolvedTheme === 'dark' 
                ? 'text-gray-300' 
                : 'text-gray-800'
              }
            `}
          >
            Page Not Found
          </Typography>
          <Typography 
            className={
              resolvedTheme === 'dark' 
                ? 'text-gray-400' 
                : 'text-gray-600'
            }
          >
            The page you're looking for doesn't exist or has been moved.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/"
            className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-medium
              overflow-hidden transition-all duration-300 hover:scale-105
              ${resolvedTheme === 'dark'
                ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white hover:shadow-xl hover:shadow-blue-500/25'
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white hover:shadow-xl hover:shadow-blue-500/25'
              }
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-700 before:via-purple-700 before:to-blue-700
              before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
            `}
          >
            <span className="relative flex items-center gap-2">
              <FiArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </span>
          </Link>
        </motion.div>
      </div>
    </Container>
  )
} 