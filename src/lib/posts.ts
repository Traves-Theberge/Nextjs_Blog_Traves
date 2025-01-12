import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

// Helper function to calculate reading time
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    date: data.date,
    coverImage: data.coverImage,
    tags: data.tags || [],
    content: content,
    author: {
      name: data.author?.name || 'Traves Theberge',
      avatar: data.author?.avatar || '/images/avatar.jpg',
      title: data.author?.title || 'Full Stack Developer'
    },
    readingTime: calculateReadingTime(content),
    featured: data.featured || false,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const slugs = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    slugs
      .filter(slug => slug.endsWith('.mdx'))
      .map(async slug => getPostBySlug(slug))
  );

  return posts.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.featured);
} 