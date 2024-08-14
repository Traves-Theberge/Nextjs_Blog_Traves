"use client";
import React from "react";
import Image from "next/image";
import { useLayout } from "../../../components/layout/layout-context";
import { Section } from "../../../components/layout/section";
import { Container } from "../../../components/layout/container";
import { tinaField, useTina } from "tinacms/dist/react";
import { format } from "date-fns";
import { PostQuery } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { components } from "../../../components/mdx-components";

const titleColorClasses = {
  blue: "from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500",
  teal: "from-teal-400 to-teal-600 dark:from-teal-300 dark:to-teal-500",
  green: "from-green-400 to-green-600",
  red: "from-red-400 to-red-600",
  pink: "from-pink-300 to-pink-500",
  purple:
    "from-purple-400 to-purple-600 dark:from-purple-300 dark:to-purple-500",
  orange:
    "from-orange-300 to-orange-600 dark:from-orange-200 dark:to-orange-500",
  yellow:
    "from-yellow-400 to-yellow-500 dark:from-yellow-300 dark:to-yellow-500",
};

interface ClientPostProps {
  data: PostQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

const ClientPage: React.FC<ClientPostProps> = (props) => {
  const { data } = useTina(props);
  const { theme } = useLayout();

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{data.post.title}</h1>
      <div className="text-sm text-base-content/70 mb-8">
        {format(new Date(data.post.date), "MMMM dd, yyyy")}
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <TinaMarkdown content={data.post._body} components={components} />
      </div>
    </article>
  );
};

export default function PostClientPage(props: ClientPostProps) {
  return <ClientPage {...props} />;
}