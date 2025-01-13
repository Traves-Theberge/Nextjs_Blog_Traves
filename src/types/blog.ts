export interface Author {
  name: string
  avatar: string
  title: string
}

export interface BlogPost {
  title: string
  slug: string
  date: string
  description: string
  coverImage: string
  tags: string[]
  content: string
  author: Author
  readingTime?: string
  featured?: boolean
}

export type Post = BlogPost 