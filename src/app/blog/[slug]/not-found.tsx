import Link from 'next/link'
import { Container } from '@/components/ui/common/Container'
import { Typography } from '@/components/ui/common/Typography'

export default function NotFound() {
  return (
    <Container className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4">
        404 - Post Not Found
      </Typography>
      <Typography className="text-gray-600 dark:text-gray-400 mb-8">
        The blog post you are looking for does not exist.
      </Typography>
      <Link
        href="/blog"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
      >
        Back to Blog
      </Link>
    </Container>
  )
} 