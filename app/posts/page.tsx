import Layout from "../../components/layout/layout";
import client from "../../tina/__generated__/client";
import PostsClientPage from "./client-page";

export default async function PostsPage() {
  try {
    const posts = await client.queries.postConnection();

    if (!posts) {
      throw new Error("No posts found");
    }

    return (
      <Layout rawData={posts}>
        <PostsClientPage {...posts} />
      </Layout>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Error</h1>
          <p>An error occurred while fetching posts. Please try again later.</p>
        </div>
      </Layout>
    );
  }
}