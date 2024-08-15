import Layout from "../../components/layout/layout";
import client from "../../tina/__generated__/client";
import PostsClientPage from "./client-page";

export default async function PostsPage() {
  const postsResponse = await client.queries.postConnection({ first: 100 });
  return (
    <Layout>
      <PostsClientPage data={postsResponse.data} />
    </Layout>
  );
}