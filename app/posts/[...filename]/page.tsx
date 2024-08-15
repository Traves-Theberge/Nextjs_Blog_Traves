import React from "react";
import client from "../../../tina/__generated__/client";
import Layout from "../../../components/layout/layout";
import PostClientPage from "./client-page";

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
  return (
    <Layout>
      <PostClientPage data={postResponse.data} variables={variables} query={query} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection();
  return postsResponse.data.postConnection.edges.map((edge) => ({
    filename: [edge.node._sys.filename],
  }));
}