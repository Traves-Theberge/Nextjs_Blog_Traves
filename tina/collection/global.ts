import type { Collection } from "tinacms";

const Global: Collection = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "object",
      label: "Header",
      name: "header",
      fields: [
        {
          type: "string",
          name: "name",
          label: "Site Name",
        },
        {
          type: "string",
          name: "color",
          label: "Header Color",
        },
        {
          type: "object",
          name: "nav",
          label: "Navigation",
          list: true,
          fields: [
            {
              type: "string",
              name: "href",
              label: "Link",
            },
            {
              type: "string",
              name: "label",
              label: "Label",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Footer",
      name: "footer",
      fields: [
        {
          type: "string",
          name: "color",
          label: "Footer Color",
        },
        {
          type: "object",
          name: "social",
          label: "Social Links",
          fields: [
            {
              type: "string",
              name: "facebook",
              label: "Facebook",
            },
            {
              type: "string",
              name: "twitter",
              label: "Twitter",
            },
            {
              type: "string",
              name: "instagram",
              label: "Instagram",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Theme",
      name: "theme",
      fields: [
        {
          type: "string",
          name: "color",
          label: "Color",
        },
        {
          type: "string",
          name: "font",
          label: "Font",
        },
        {
          type: "string",
          name: "darkMode",
          label: "Dark Mode",
        },
      ],
    },
  ],
};

export default Global;