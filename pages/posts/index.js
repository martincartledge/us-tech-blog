import { getPublicPosts } from "libs/post";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import PostGridSection from "components/PostGridSection";
import Header from "components/Header";
import Footer from "components/Footer";
import Page from "components/Page";
import Main from "components/Main";

export default function PostsPage({ posts }) {
  return (
    <Page>
      <DocumentHead title="Posts" />
      <Navbar />
      <Header title="All posts" />
      <Main>
        <PostGridSection title="Posts" posts={posts} />
      </Main>
      <Footer />
    </Page>
  );
}

export async function getStaticProps() {
  const posts = await getPublicPosts();

  return {
    props: {
      posts,
    },
  };
}
