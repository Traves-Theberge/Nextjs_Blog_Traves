'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { format, parseISO } from 'date-fns'
import { BlogPost } from '@/types/blog'

interface BlogCardProps {
  post: BlogPost
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const { resolvedTheme } = useTheme()

  // Safely format the date
  const formatDate = (dateString: string) => {
    try {
      const date = parseISO(dateString)
      return format(date, 'MMMM d, yyyy')
    } catch (error) {
      console.error('Invalid date format:', dateString)
      return 'Date unavailable'
    }
  }

  return (
    <div className="group relative h-full">
      <Link href={`/blog/${post.slug}`}>
        <motion.article 
          className={`relative h-full flex flex-col overflow-hidden rounded-2xl
            ${resolvedTheme === 'dark'
              ? 'bg-gray-900/50 hover:bg-gray-800/50'
              : 'bg-white hover:bg-gray-50'
            } 
            backdrop-blur-xl transition-colors duration-300
            border border-gray-200 dark:border-gray-800
          `}
        >
          {/* Image Container */}
          <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority={post.featured}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 
                     (max-width: 1200px) 50vw, 
                     33vw"
              quality={90}
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-between min-h-0">
            <div className="space-y-4 flex-shrink">
              <h3 className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs font-medium rounded-full
                      ${resolvedTheme === 'dark'
                        ? 'bg-gray-800 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                      }
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <time 
              dateTime={post.date}
              className="block text-sm text-gray-500 dark:text-gray-500 mt-4 shrink-0"
            >
              {formatDate(post.date)}
            </time>
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
    </div>
  )
} 