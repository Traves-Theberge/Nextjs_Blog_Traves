'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '../common/Container'
import type { BlogPost } from '@/types/blog'
import { useTheme } from 'next-themes'

interface BlogPostPageProps {
  post: BlogPost
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const { resolvedTheme } = useTheme()

  return (
    <article className="py-12">
      <Container className="max-w-4xl mx-auto px-4">
        {/* Cover Image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div 
          className={`
            prose prose-lg dark:prose-invert max-w-none
            prose-h1:text-4xl md:prose-h1:text-5xl lg:prose-h1:text-6xl prose-h1:font-bold prose-h1:mb-8
            prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6
            prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-li:mb-2
            prose-strong:font-bold prose-strong:text-gray-900 dark:prose-strong:text-white
            ${resolvedTheme === 'dark'
              ? 'prose-headings:text-white'
              : 'prose-headings:text-gray-900'
            }
          `}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </article>
  )
} 