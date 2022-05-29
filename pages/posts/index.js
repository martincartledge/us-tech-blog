import { getPosts } from "libs/post";
import Header from "components/Header";
import PostListSection from "components/PostListSection";

export default function PostsPage({ posts }) {
  return (
    <>
      <Header pageTitle="Posts" />
      <div className="container">
        <PostListSection title="Posts" posts={posts} />
      </div>
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
