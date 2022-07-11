import { getPosts } from "libs/post";
import Header from "components/Header";
import Container from "components/Container";
import PostListSection from "components/PostListSection";
import Footer from "components/Footer";

export default function HomePage({ posts }) {
  return (
    <>
      <Header />
      <Container>
        <PostListSection title="Recent Posts" posts={posts} />
      </Container>
      <Footer />
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
