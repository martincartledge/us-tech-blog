import Head from "next/head";
import { getPosts } from "libs/post";
import Header from "components/Header";
import PageContainer from "components/PageContainer";
import PostListSection from "components/PostListSection";

export default function ArchivesPage({ posts }) {
  return (
    <>
      <Head>
        <title>Archives</title>
      </Head>
      <PageContainer>
        <Header />
        <PostListSection title="Archives" posts={posts} />
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
