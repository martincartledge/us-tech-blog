import Head from "next/head";
import { getPosts } from "libs/post";
import PageContainer from "components/PageContainer";
import NavigationSection from "components/NavigationSection";
import RecentPostsSection from "components/RecentPostsSection";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>OpenTable UK Tech Blog</title>
      </Head>
      <PageContainer>
        <h1>OpenTable UK Tech Blog</h1>
        <NavigationSection />
        <RecentPostsSection posts={posts} />
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
