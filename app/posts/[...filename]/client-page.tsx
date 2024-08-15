"use client";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/react";
import { format } from "date-fns";
import { useTheme } from "next-themes";

export default function ClientPost(props: { data: any; variables: any; query: string }) {
  const { data } = useTina(props);
  const post = data?.post;
  const { theme } = useTheme();

  if (!post) return <div>Loading...</div>;

  return (
    <article className={`prose lg:prose-xl mx-auto p-4 ${theme === 'dark' ? 'prose-dark' : ''}`}>
      <h1>{post.title}</h1>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        {format(new Date(post.date), "MMMM dd, yyyy")}
      </p>
      {post.heroImg && (
        <img
          src={post.heroImg}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      )}
      <div className={theme === 'dark' ? 'prose-dark' : ''}>
        <TinaMarkdown content={post._body} />
      </div>
    </article>
  );
}