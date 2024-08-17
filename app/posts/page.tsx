import { draftMode } from 'next/headers';
import Layout from "../../components/layout/layout";
import client from "../../tina/__generated__/client";
import PostsClientPage from "./client-page";

export default async function PostsPage() {
  const { isEnabled } = draftMode();
  const postsResponse = await client.queries.postConnection({ 
    first: 100,
    sort: 'date',
    last: isEnabled ? undefined : 100
  });
  return (
    <Layout>
      <PostsClientPage data={postsResponse.data} />
    </Layout>
  );
}