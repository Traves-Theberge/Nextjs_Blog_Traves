export interface ContentMeta {
  title: string
  description: string
  date: string
  tags: string[]
  author: {
    name: string
    avatar: string
    title: string
  }
}

export interface Content {
  meta: ContentMeta
  content: string
} 