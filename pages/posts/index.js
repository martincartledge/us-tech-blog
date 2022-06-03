import { getPosts } from "libs/post";
import Header from "components/Header";
import Container from "components/Container";
import PostListSection from "components/PostListSection";

export default function PostsPage({ posts }) {
  return (
    <>
      <Header pageTitle="Posts" />
      <Container>
        <PostListSection title="Posts" posts={posts} />
      </Container>
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
