import { defineConfig } from "tinacms";
import Post from "./collection/post";
import Global from "./collection/global";

const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! ||
    process.env.HEAD!,
  token: process.env.TINA_TOKEN!,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema: {
    collections: [Post, Global],
  },
  localContentPath: "./content",
  cmsCallback: (cms) => {
    cms.flags.set("baseUrl", process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000");
    return cms;
  },
});

export default config;