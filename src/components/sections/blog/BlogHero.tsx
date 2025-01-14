'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BlogPost } from '@/types/blog'

interface BlogHeroProps {
  post: BlogPost
}

export const BlogHero = ({ post }: BlogHeroProps) => {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 100vw,
                 100vw"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl"
          >
            {post.title}
          </motion.h1>
        </div>
      </div>
    </section>
  )
} 