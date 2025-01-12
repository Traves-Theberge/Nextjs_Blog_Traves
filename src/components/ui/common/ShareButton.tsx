'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShare2, FiTwitter, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi'
import { useTheme } from 'next-themes'

interface ShareButtonProps {
  url: string
  title: string
  description?: string
}

export function ShareButton({ url, title, description }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const { resolvedTheme } = useTheme()

  const shareData = {
    title,
    text: description,
    url
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      setIsOpen(!isOpen)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.log('Error copying:', err)
    }
  }

  const shareOnTwitter = () => {
    const text = `Check out "${title}"`
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, '_blank')
  }

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedInUrl, '_blank')
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShare}
        className={`p-2 rounded-full transition-colors duration-300
          ${resolvedTheme === 'dark'
            ? 'hover:bg-gray-800'
            : 'hover:bg-gray-100'
          }
        `}
        aria-label="Share this post"
      >
        <FiShare2 className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute right-0 mt-2 p-2 rounded-xl shadow-lg border backdrop-blur-sm z-50
              ${resolvedTheme === 'dark'
                ? 'bg-gray-900/90 border-gray-800'
                : 'bg-white/90 border-gray-200'
              }
            `}
          >
            <div className="flex flex-col gap-2 min-w-[200px]">
              <button
                onClick={shareOnTwitter}
                className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors
                  ${resolvedTheme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                  }
                `}
              >
                <FiTwitter className="w-5 h-5" />
                <span>Share on Twitter</span>
              </button>
              
              <button
                onClick={shareOnLinkedIn}
                className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors
                  ${resolvedTheme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                  }
                `}
              >
                <FiLinkedin className="w-5 h-5" />
                <span>Share on LinkedIn</span>
              </button>

              <button
                onClick={handleCopy}
                className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors
                  ${resolvedTheme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                  }
                `}
              >
                {copied ? (
                  <FiCheck className="w-5 h-5 text-green-500" />
                ) : (
                  <FiCopy className="w-5 h-5" />
                )}
                <span>{copied ? 'Copied!' : 'Copy link'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 