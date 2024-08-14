"use client";
import { tinaField } from "tinacms/dist/react";
import { Icon } from "../icon";
import { iconSchema } from "../../tina/fields/icon";

const Feature = ({ data }) => {
  return (
    <div className="card w-96 bg-white dark:bg-gray-800 shadow-xl" data-tina-field={tinaField(data)}>
      <figure className="px-10 pt-10">
        {data.icon && (
          <Icon
            tinaField={tinaField(data, "icon")}
            data={{ size: "large", ...data.icon }}
          />
        )}
      </figure>
      <div className="card-body items-center text-center">
        {data.title && (
          <h2 className="card-title text-gray-900 dark:text-white" data-tina-field={tinaField(data, "title")}>
            {data.title}
          </h2>
        )}
        {data.text && (
          <p className="text-gray-900 dark:text-white" data-tina-field={tinaField(data, "text")}>{data.text}</p>
        )}
      </div>
    </div>
  );
};

export const Features = ({ data }) => {
  return (
    <div className="p-10 bg-base-200 dark:bg-gray-800">
      <div className="flex flex-wrap justify-center gap-6">
        {data.items &&
          data.items.map((item, i) => <Feature key={i} data={item} />)}
      </div>
    </div>
  );
};

const defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
};

export const featureBlockSchema = {
  name: "features",
  label: "Features",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature],
    },
  },
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
        defaultItem: {
          ...defaultFeature,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
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