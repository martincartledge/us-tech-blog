import Head from "next/head";
import { getPosts } from "libs/post";
import Header from "components/Header";
import PageContainer from "components/PageContainer";
import PostListSection from "components/PostListSection";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>OpenTable UK Tech Blog</title>
      </Head>
      <Header />
      <PageContainer>
        <PostListSection title="Recent Posts" posts={posts} />
      </PageContainer>
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
