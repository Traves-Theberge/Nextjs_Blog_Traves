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
  return pagesResponse.data.postConnection.edges.map((edge) => ({
    filename: edge.node._sys.breadcrumbs,
  }));
}