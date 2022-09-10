import { getPublicPosts } from "libs/post";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import PostGridSection from "components/PostGridSection";
import Header from "components/Header";
import Footer from "components/Footer";
import Main from "components/Main";

export default function PostsPage({ posts }) {
  return (
    <Main>
      <DocumentHead title="Posts" />
      <Navbar />
      <Header title="All posts" subtitle={`${posts.length} posts in total`} />
      <PostGridSection title="Posts" posts={posts} />
      <Footer />
    </Main>
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
