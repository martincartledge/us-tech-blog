import Head from "next/head";
import { getPosts } from "libs/post";
import Header from "components/Header";
import PostListSection from "components/PostListSection";

export default function PostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <div className="container">
        <PostListSection title="Posts" posts={posts} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
