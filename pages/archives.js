import Head from "next/head";
import { getPosts } from "libs/post";
import PageContainer from "components/PageContainer";
import PostList from "components/PostList";

export default function ArchivesPage({ posts }) {
  return (
    <>
      <Head>
        <title>Archives</title>
      </Head>
      <PageContainer>
        <PostList posts={posts} />
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
