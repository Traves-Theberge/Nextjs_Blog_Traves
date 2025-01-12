'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { format, parseISO } from 'date-fns'
import { BlogPost } from '@/types/blog'
import { FiClock, FiCalendar, FiTag } from 'react-icons/fi'
import { ShareButton } from '../common/ShareButton'

export const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const { resolvedTheme } = useTheme()

  // Safely format the date
  const formatDate = (dateString: string) => {
    try {
      const date = parseISO(dateString)
      return format(date, 'MMM d, yyyy')
    } catch (error) {
      console.error('Invalid date format:', dateString)
      return 'Date unavailable'
    }
  }

  // Get the full URL for sharing
  const getShareUrl = () => {
    if (typeof window === 'undefined') return ''
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin
    return `${baseUrl}/blog/${post.slug}`
  }

  return (
    <div className="relative group h-full">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <motion.article
          className={`relative h-full overflow-hidden rounded-2xl border transition-all duration-300 flex flex-col
            ${resolvedTheme === 'dark'
              ? 'border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-900/80'
              : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
            }
          `}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Cover Image - Fixed aspect ratio */}
          <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {post.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/90 text-white backdrop-blur-sm">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content - Flex grow to fill remaining space */}
          <div className="flex-1 p-6 flex flex-col">
            {/* Tags - Fixed height */}
            <div className="flex flex-wrap gap-2 mb-4 shrink-0 min-h-[28px]">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full
                    ${resolvedTheme === 'dark'
                      ? 'bg-gray-800 text-gray-200'
                      : 'bg-gray-100 text-gray-800'
                    }
                  `}
                >
                  <FiTag className="mr-1 w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Content wrapper - Flex grow */}
            <div className="flex-1 flex flex-col justify-between min-h-0">
              <div className="space-y-4 flex-shrink">
                <h3 className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {post.description}
                </p>
              </div>

              {/* Metadata - Fixed height */}
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-4 shrink-0">
                <div className="flex items-center">
                  <FiCalendar className="w-4 h-4 mr-1" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div className="flex items-center">
                  <FiClock className="w-4 h-4 mr-1" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`absolute inset-0 bg-gradient-to-t
              ${resolvedTheme === 'dark'
                ? 'from-blue-600/10 via-transparent to-transparent'
                : 'from-blue-500/5 via-transparent to-transparent'
              }
            `} />
          </div>
        </motion.article>
      </Link>

      {/* Share Button */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <ShareButton 
          url={getShareUrl()}
          title={post.title}
          description={post.description}
        />
      </div>
    </div>
  )
} 