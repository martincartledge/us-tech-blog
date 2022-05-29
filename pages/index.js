import Head from "next/head";
import { getPosts } from "libs/post";
import Header from "components/Header";
import PostListSection from "components/PostListSection";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>OpenTable UK Tech Blog</title>
      </Head>
      <Header />
      <div className="container">
        <PostListSection title="Recent Posts" posts={posts} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  posts.splice(3, posts.length - 1);

  return {
    props: {
      posts,
    },
  };
}
