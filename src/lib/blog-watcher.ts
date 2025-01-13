import fs from 'fs'
import path from 'path'
import { BlogPost } from '@/types/blog'
import matter from 'gray-matter'
import { revalidatePath } from 'next/cache'

// Simple internal logger to avoid circular dependencies
const log = {
  info: (message: string, ...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[INFO] ${message}`, ...args)
    }
  },
  error: (message: string, error: unknown) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(`[ERROR] ${message}`, error)
    }
  }
}

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

// Template is now internal to the watcher
const POST_TEMPLATE = `---
title: "Your Post Title"
description: "A brief description of your post"
date: "YYYY-MM-DD"
coverImage: "/images/blog/cover-image.jpg"
tags: ["AI", "Hardware", "Machine Learning", "Web Development", "Workflows", "Agents", "Automation"]
author:
  name: "Traves Theberge"
  avatar: "/images/avatar.jpg"
  title: "Full Stack Developer"
featured: false
---

# Your Post Title

Start writing your post content here...
`

// Create blog directory if it doesn't exist
export function initializeBlogDirectory() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

// Watch for changes in the blog directory
export function watchBlogDirectory() {
  if (process.env.NODE_ENV === 'development') {
    initializeBlogDirectory()

    fs.watch(BLOG_DIR, async (eventType, filename) => {
      if (filename?.endsWith('.mdx')) {
        try {
          log.info(`Blog file changed: ${filename}`)
          await revalidatePath('/blog')
          log.info('Blog cache revalidated')
        } catch (error) {
          log.error('Error processing blog change:', error)
        }
      }
    })
  }
}

// Helper function to create a new post (can be used programmatically)
export function createNewPost(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, POST_TEMPLATE)
    return true
  }
  return false
} 