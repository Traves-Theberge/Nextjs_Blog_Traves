"use client";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useLayout } from "../../components/layout/layout-context";
import { BsArrowRight } from "react-icons/bs";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import {
  PostConnectionQuery,
  PostConnectionQueryVariables,
} from "../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

const titleColorClasses = {
  blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
  teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
  green: "group-hover:text-green-600 dark:group-hover:text-green-300",
  red: "group-hover:text-red-600 dark:group-hover:text-red-300",
  pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
  purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
  orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
  yellow: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
};
interface ClientPostProps {
  data: PostConnectionQuery;
  variables: PostConnectionQueryVariables;
  query: string;
}

export default function PostsClientPage(props: ClientPostProps) {
  const { data } = useTina(props);
  const { theme } = useLayout();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.postConnection.edges.map((postData) => {
          const post = postData.node;
          const date = new Date(post.date);
          let formattedDate = "";
          if (!isNaN(date.getTime())) {
            formattedDate = format(date, "MMM dd, yyyy");
          }
          return (
            <Link
              key={post.id}
              href={`/posts/` + post._sys.breadcrumbs.join("/")}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body">
                <h2 className="card-title text-2xl mb-2">{post.title}</h2>
                <p className="text-sm text-base-content/70 mb-4">{formattedDate}</p>
                <div className="prose dark:prose-invert">
                  <TinaMarkdown content={post.excerpt} />
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Read More</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}