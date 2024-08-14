import type { Collection, Template } from "tinacms";
import { heroBlockSchema } from "../../components/blocks/hero";
import { contentBlockSchema } from "../../components/blocks/content";
import { featureBlockSchema } from "../../components/blocks/features";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  ui: {
    router: ({ document }) => {
      return `/pages/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        featureBlockSchema,
        contentBlockSchema,
      ] as Template[],
    },
  ],
};

export default Page;