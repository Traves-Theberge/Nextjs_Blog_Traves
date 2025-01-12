'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export const Logo = () => {
  const { resolvedTheme } = useTheme()

  return (
    <Link href="/">
      <motion.div
        className="group relative font-bold text-xl md:text-2xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div 
          className={`absolute -inset-2 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ${resolvedTheme === 'dark'
              ? 'bg-gradient-to-r from-blue-600/30 via-cyan-400/30 to-blue-600/30'
              : 'bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20'
            }
          `}
        />
        
        <span 
          className={`relative font-extrabold tracking-tight
            ${resolvedTheme === 'dark'
              ? 'text-white hover:text-blue-200'
              : 'text-gray-900 hover:text-blue-800'
            }
            transition-colors duration-300
          `}
        >
          <span className="relative">
            Traves Theberge
            <div 
              className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${resolvedTheme === 'dark'
                  ? 'bg-gradient-to-r from-transparent via-blue-400/50 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-blue-700/30 to-transparent'
                }
              `}
            />
          </span>
        </span>
      </motion.div>
    </Link>
  )
} 