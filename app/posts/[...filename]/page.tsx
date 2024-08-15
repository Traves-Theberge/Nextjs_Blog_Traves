import React from "react";
import client from "../../../tina/__generated__/client";
import Layout from "../../../components/layout/layout";
import PostClientPage from "./client-page";
import fs from 'fs';

export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {
  const relativePath = `${params.filename.join("/")}.mdx`;
  const query = `
    query BlogPostQuery($relativePath: String!) {
      post(relativePath: $relativePath) {
        id
        title
        date
        heroImg
        excerpt
        _body
      }
    }
  `;
  const variables = { relativePath };
  const postResponse = await client.request({
    query,
    variables,
  }, {});
  if (!postResponse.data.post) {
    return <div>Content not found</div>;
  }
  return (
    <Layout>
      <PostClientPage data={postResponse.data} variables={variables} query={query} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const pagesResponse = await client.queries.postConnection();
  return pagesResponse.data.postConnection.edges
    .filter(edge => {
      const filePath = `content/posts/${edge.node._sys.filename}.md`;
      return fs.existsSync(filePath);
    })
    .map((edge) => ({
      filename: edge.node._sys.breadcrumbs,
    }));
}