"use client";
import React from "react";
import { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Content = ({ data }) => {
  return (
    <div className="prose dark:prose-invert max-w-none w-full text-gray-900 dark:text-gray-100">
      <TinaMarkdown content={data.body} />
    </div>
  );
};

export const contentBlockSchema: Template = {
  name: "content",
  label: "Content",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      type: "rich-text",
      label: "Body",
      name: "body",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};