import { getPosts } from "libs/post";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import Container from "components/Container";
import PostListSection from "components/PostListSection";
import Footer from "components/Footer";
import Main from "components/Main";

export default function PostsPage({ posts }) {
  return (
    <Main>
      <DocumentHead title="Posts" />
      <Navbar />
      <Container>
        <PostListSection title="Posts" posts={posts} />
      </Container>
      <Footer />
    </Main>
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
