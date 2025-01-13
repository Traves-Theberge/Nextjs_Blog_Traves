import Image from 'next/image'
import { format } from 'date-fns'
import { type Post } from '@/types'

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="group relative flex flex-col space-y-2">
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={804}
          height={452}
          className="rounded-lg border bg-muted transition-colors"
          priority={true}
        />
      )}
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-muted-foreground">
        {post.excerpt || post.description}
      </p>
      <div className="flex items-center gap-x-4 text-sm text-muted-foreground">
        <time dateTime={post.date}>
          {format(new Date(post.date), 'MMMM dd, yyyy')}
        </time>
        {post.readingTime && <span>{post.readingTime}</span>}
      </div>
    </article>
  )
} 