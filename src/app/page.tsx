import { WelcomeHero } from '@/components/ui/sections/WelcomeHero'
import { LatestPosts } from '@/components/ui/sections/LatestPosts'
import { getAllPosts } from '@/lib/posts'

export default async function HomePage() {
  const posts = await getAllPosts()
  
  return (
    <>
      <WelcomeHero />
      <LatestPosts posts={posts} />
    </>
  )
} 