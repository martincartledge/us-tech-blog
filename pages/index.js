import Head from "next/head";
import { getPosts } from "libs/post";
import MainContainer from "components/MainContainer";
import NavigationSection from "components/NavigationSection";
import RecentPostsSection from "components/RecentPostsSection";

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>OpenTable UK Tech Blog</title>
      </Head>
      <MainContainer>
        <h1>OpenTable UK Tech Blog</h1>
        <NavigationSection />
        <RecentPostsSection posts={posts} />
      </MainContainer>
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
