import React from "react";
import client from "../../../tina/__generated__/client";
import Layout from "../../../components/layout/layout";
import PostClientPage from "./client-page";
import fs from 'fs';
import { useRouter } from 'next/navigation';
import { draftMode } from 'next/headers';
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {
  const { isEnabled } = draftMode();
  const relativePath = `${params.filename.join("/")}.mdx`;
  const tinaProps = await client.queries.post({
    relativePath,
    ...(isEnabled ? { draft: true } : {}),
  });

  if (!tinaProps.data?.post) {
    return notFound();
  }

  return (
    <Layout>
      <PostClientPage {...tinaProps} />
      
    </Layout>
  );
}

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection();
  return postsResponse.data.postConnection.edges
    .filter(edge => {
      const filePath = `content/posts/${edge.node._sys.filename}.md`;
      return fs.existsSync(filePath);
    })
    .map((edge) => ({
      filename: edge.node._sys.breadcrumbs,
    }));
}

const MobileMenu = ({ setIsMenuOpen, resolvedTheme, pathname }) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <div className={`lg:hidden fixed top-[60px] left-0 right-0 z-50 shadow-md ${
      resolvedTheme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
    }`}>
      <nav className="flex flex-col items-center py-2">
        <button onClick={() => handleNavigation('/')} className={`w-full text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 ${pathname === '/' ? 'font-bold' : ''}`}>
          Home
        </button>
        <button onClick={() => handleNavigation('/about')} className={`w-full text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 ${pathname === '/about' ? 'font-bold' : ''}`}>
          About
        </button>
        <button onClick={() => handleNavigation('/posts')} className={`w-full text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 ${pathname === '/posts' ? 'font-bold' : ''}`}>
          Blog
        </button>
      </nav>
    </div>
  );
};