export interface BlogPost {
  title: string
  slug: string
  date: string
  description: string
  coverImage: string
  tags: string[]
  content: string
  author: {
    name: string
    avatar: string
    title: string
  }
  readingTime?: string
  featured?: boolean
} 