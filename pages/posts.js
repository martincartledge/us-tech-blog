import Head from "next/head";
import { getPosts } from "libs/post";
import Header from "components/Header";
import PageContainer from "components/PageContainer";
import PostListSection from "components/PostListSection";

export default function PostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <PageContainer>
        <PostListSection title="Posts" posts={posts} />
      </PageContainer>
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
