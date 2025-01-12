import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const pagesDirectory = path.join(process.cwd(), 'pages-content');

export function getAllPages() {
  const pages: { path: string; title: string }[] = [];
  
  function traverseDirectory(currentPath: string) {
    const files = fs.readdirSync(currentPath);
    
    files.forEach(file => {
      const filePath = path.join(currentPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        traverseDirectory(filePath);
      } else if (file.endsWith('.mdx')) {
        const relativePath = path.relative(pagesDirectory, filePath);
        const { data } = matter(fs.readFileSync(filePath, 'utf8'));
        pages.push({
          path: relativePath.replace(/\.mdx$/, ''),
          title: data.title || 'Untitled',
        });
      }
    });
  }
  
  traverseDirectory(pagesDirectory);
  return pages;
}

export function getPageData(relativePath: string) {
  const fullPath = path.join(pagesDirectory, relativePath);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error('Page not found');
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    content,
    title: data.title || 'Untitled',
    ...data,
  };
} 