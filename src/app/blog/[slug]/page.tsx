import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { BlogPostPage } from '@/components/ui/blog'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug)
    return {
      title: `${post.title} | Blog`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        images: [{ url: post.coverImage }],
      },
    }
  } catch {
    return {
      title: 'Post Not Found | Blog',
      description: 'The blog post you are looking for does not exist.',
    }
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostRoute({ params }: Props) {
  try {
    const post = await getPostBySlug(params.slug)
    return <BlogPostPage post={post} />
  } catch {
    notFound()
  }
} 