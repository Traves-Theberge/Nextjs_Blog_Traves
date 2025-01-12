'use client'

import { FiSearch } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

interface BlogSearchProps {
  value: string
  onChange: (value: string) => void
}

export function BlogSearch({ value, onChange }: BlogSearchProps) {
  const { resolvedTheme } = useTheme()

  return (
    <div className="relative max-w-2xl mx-auto group">
      {/* Glow Effect */}
      <div 
        className={`absolute -inset-0.5 bg-gradient-to-r opacity-75 blur-lg transition duration-500 group-hover:opacity-100
          ${resolvedTheme === 'dark'
            ? 'from-blue-600/25 via-cyan-400/25 to-blue-600/25'
            : 'from-blue-500/20 via-cyan-400/20 to-blue-500/20'
          }
        `}
      />
      
      {/* Search Icon with Animation */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
      >
        <FiSearch className={`w-5 h-5 transition-colors duration-300
          ${resolvedTheme === 'dark'
            ? 'text-blue-400 group-hover:text-blue-300'
            : 'text-blue-500 group-hover:text-blue-600'
          }
        `} />
      </motion.div>

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search posts..."
        aria-label="Search posts"
        className={`relative w-full pl-12 pr-4 py-4 rounded-xl border-2 focus:ring-2 focus:outline-none transition duration-300
          ${resolvedTheme === 'dark'
            ? 'bg-gray-900/50 border-gray-800/50 text-gray-100 placeholder-gray-400 ' +
              'focus:border-blue-500/50 focus:ring-blue-500/20 group-hover:border-blue-600/50'
            : 'bg-white/50 border-gray-200 text-gray-900 placeholder-gray-500 ' +
              'focus:border-blue-400/50 focus:ring-blue-400/20 group-hover:border-blue-500/50'
          }
          backdrop-blur-sm
        `}
      />

      {/* Tracer Effect */}
      <div 
        className={`absolute inset-x-0 -bottom-px h-px transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500
          ${resolvedTheme === 'dark'
            ? 'bg-gradient-to-r from-transparent via-blue-400/50 to-transparent'
            : 'bg-gradient-to-r from-transparent via-blue-500/50 to-transparent'
          }
        `}
      />
    </div>
  )
} 