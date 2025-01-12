import { getAllPosts } from '@/lib/posts'
import { BlogLayout } from '@/components/ui/blog'

export const metadata = {
  title: 'Blog | Traves Theberge',
  description: 'Thoughts on software development, automation, and technology.'
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  return <BlogLayout posts={posts} />
} 