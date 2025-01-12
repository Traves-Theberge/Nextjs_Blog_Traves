'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { FiClock, FiCalendar, FiTag } from 'react-icons/fi'
import { Container } from '../common/Container'
import { Typography } from '../common/Typography'
import { BlogContent } from './BlogContent'
import type { BlogPost } from '@/types/blog'
import { useTheme } from 'next-themes'
import { ShareButton } from '../common/ShareButton'
import { usePathname } from 'next/navigation'

interface BlogPostPageProps {
  post: BlogPost
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()

  // Get the full URL for sharing
  const getShareUrl = () => {
    if (typeof window === 'undefined') return ''
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin
    return `${baseUrl}${pathname}`
  }

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
    <article className="py-20">
      <Container className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <Typography 
              variant="h1" 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent
                ${resolvedTheme === 'dark'
                  ? 'bg-gradient-to-r from-white via-blue-400 to-white'
                  : 'bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900'
                }
              `}
            >
              {post.title}
            </Typography>
            <ShareButton 
              url={getShareUrl()}
              title={post.title}
              description={post.description}
            />
          </div>

          {/* Meta information */}
          <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <div
                key={tag}
                className={`px-3 py-1 rounded-full text-sm
                  ${resolvedTheme === 'dark'
                    ? 'bg-gray-800 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
                  }
                `}
              >
                <FiTag className="inline-block w-3 h-3 mr-1" />
                {tag}
              </div>
            ))}
          </div>

          {/* Cover Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-12">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 mb-12">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Typography className="font-medium text-lg">
                {post.author.name}
              </Typography>
              <Typography className="text-gray-600 dark:text-gray-400">
                {post.author.title}
              </Typography>
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <BlogContent>{post.content}</BlogContent>
        </motion.div>
      </Container>
    </article>
  )
} 