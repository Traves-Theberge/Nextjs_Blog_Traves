import React from "react";
import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";
import Layout from "../../components/layout/layout";

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {
  const relativePath = `${params.filename.join("/")}.md`;
  const pageResponse = await client.queries.post({
    relativePath,
  });

  if (!pageResponse.data.post) {
    return <div>Content not found</div>;
  }

  return (
    <Layout>
      <ClientPage data={{
        page: undefined
      }} variables={{
        relativePath: ""
      }} query={""} {...pageResponse.data.post} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const pagesResponse = await client.queries.postConnection();
  return pagesResponse.data.postConnection.edges
    .filter(edge => {
      const filePath = `content/posts/${edge.node._sys.filename}.md`;
      return require('fs').existsSync(filePath);
    })
    .map((edge) => ({
      filename: edge.node._sys.breadcrumbs,
    }));
}