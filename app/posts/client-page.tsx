"use client";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTheme } from "next-themes";

export default function PostsClientPage({ data }) {
  const { resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === 'dark';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`container mx-auto px-4 py-8 ${textColor}`}>
      <h1 className={`text-4xl font-bold mb-8 ${textColor}`}>Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.postConnection.edges.map(({ node: post }) => {
          const date = new Date(post.date);
          const formattedDate = format(date, "MMM dd, yyyy");
          return (
            <Link
              key={post.id}
              href={`/posts/${post._sys.filename}`}
              className={`card ${cardBg} shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden`}
            >
              {post.heroImg && (
                <img
                  src={post.heroImg}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className={`card-body p-6 ${textColor}`}>
                <h2 className={`card-title text-2xl mb-2`}>{post.title}</h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{formattedDate}</p>
                <div className={`prose ${isDarkMode ? 'prose-invert' : ''} mb-4 ${textColor}`}>
                  <div className={`text-sm [&>p]:m-0 ${textColor}`}>
                    <TinaMarkdown content={post.excerpt} />
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className={`btn btn-primary text-white`}>Read More</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}