'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../common/Container'
import { Typography } from '../common/Typography'
import { BlogPostCard, BlogSearch, BlogFilter } from '.'
import { Pagination } from '../common/Pagination'
import type { BlogPost } from '@/types/blog'
import { useTheme } from 'next-themes'

interface BlogLayoutProps {
  posts: BlogPost[]
}

const POSTS_PER_PAGE = 6

export function BlogLayout({ posts }: BlogLayoutProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const { resolvedTheme } = useTheme()

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    const tags = posts.flatMap(post => post.tags)
    return Array.from(new Set(tags))
  }, [posts])

  // Filter posts based on search query and selected tags
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => post.tags.includes(tag))

      return matchesSearch && matchesTags
    })
  }, [posts, searchQuery, selectedTags])

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedTags])

  return (
    <section className="py-20">
      <Container className="max-w-7xl mx-auto px-4">
        {/* Search and Filters - Added pt-8 for more space above */}
        <div className="mb-8 space-y-6 pt-8">
          <BlogSearch value={searchQuery} onChange={setSearchQuery} />
          <BlogFilter 
            tags={allTags}
            selectedTags={selectedTags}
            onTagSelect={setSelectedTags}
          />
        </div>

        {/* Posts Grid - Updated with consistent sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {paginatedPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {filteredPosts.length > POSTS_PER_PAGE && (
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Typography className="text-gray-600 dark:text-gray-400">
              No posts found. Try adjusting your search or filters.
            </Typography>
          </motion.div>
        )}
      </Container>
    </section>
  )
} 