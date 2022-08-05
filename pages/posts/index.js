import { getPublicPosts } from "libs/post";
import DocumentHead from "components/DocumentHead";
import PostHeader from "components/PostHeader";
import Navbar from "components/Navbar";
import Container from "components/Container";
import PostListSection from "components/PostListSection";
import Footer from "components/Footer";
import Main from "components/Main";
import Header from "../../components/Header";


export default function PostsPage({ posts }) {
  return (
    <Main>
      <DocumentHead title="Posts" />
      <Navbar />
      <PostHeader />
      <Container>
        <PostListSection title="Posts" posts={posts} />
      </Container>
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
