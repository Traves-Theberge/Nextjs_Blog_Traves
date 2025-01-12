import fs from 'fs'
import path from 'path'
import { BlogPost } from '@/types/blog'
import matter from 'gray-matter'

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

    fs.watch(BLOG_DIR, (eventType, filename) => {
      if (filename && filename.endsWith('.mdx')) {
        console.log(`Blog post ${filename} was ${eventType}d`)
        // You could trigger a revalidation here if needed
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