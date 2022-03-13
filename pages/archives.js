import Head from "next/head";
import { getPosts } from "libs/post";
import MainContainer from "components/MainContainer";
import PostList from "components/PostList";

export default function ArchivesPage({ posts }) {
  return (
    <>
      <Head>
        <title>Archives</title>
      </Head>
      <MainContainer>
        <PostList posts={posts} />
      </MainContainer>
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
