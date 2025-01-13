import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

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

  // Enhanced markdown processing
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(content);

  const contentHtml = processedContent.toString()
    // Headers
    .replace(/<h1/g, '<h1 class="text-5xl font-bold mb-8 mt-16"')
    .replace(/<h2/g, '<h2 class="text-4xl font-bold mb-6 mt-12 text-gray-900 dark:text-white border-b pb-2"')
    .replace(/<h3/g, '<h3 class="text-2xl font-semibold mb-4 mt-8 text-gray-800 dark:text-gray-100"')
    // Paragraphs and lists
    .replace(/<p>/g, '<p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">')
    .replace(/<ul>/g, '<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600 dark:text-gray-300">')
    .replace(/<li>/g, '<li class="text-lg leading-relaxed">')
    // Emphasis and links
    .replace(/<strong>/g, '<strong class="font-bold text-gray-900 dark:text-white">')
    .replace(/<em>/g, '<em class="italic text-gray-700 dark:text-gray-200">')
    .replace(/<a /g, '<a class="text-blue-600 dark:text-blue-400 hover:underline" ')
    // Blockquotes
    .replace(/<blockquote>/g, '<blockquote class="pl-4 border-l-4 border-blue-500 italic my-6 text-gray-700 dark:text-gray-300">')
    // Code blocks
    .replace(/<pre>/g, '<pre class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto mb-6">')
    .replace(/<code>/g, '<code class="text-sm font-mono text-gray-800 dark:text-gray-200">');

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    date: data.date,
    coverImage: data.coverImage,
    tags: data.tags || [],
    content: contentHtml,
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