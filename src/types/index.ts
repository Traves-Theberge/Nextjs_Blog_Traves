export interface Author {
  name: string
  avatar: string
  bio?: string
  social?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  author: Author
  coverImage?: string
  readingTime: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl: string
  featured: boolean
} 