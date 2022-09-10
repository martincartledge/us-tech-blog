import Navbar from "components/Navbar";
import PostGridSection from "components/PostGridSection";
import Footer from "components/Footer";
import Main from "components/Main";
import JobSection from "components/JobSection";
import { getPublicPosts } from "libs/post";

export default function HomePage({ posts }) {
  return (
    <Main>
      <Navbar />
      <PostGridSection title="Recent Posts" posts={posts} />
      <JobSection />
      <Footer />
    </Main>
  );
}

export async function getStaticProps() {
  const posts = await getPublicPosts();
  posts.splice(3, posts.length - 1);

  return {
    props: {
      posts,
    },
  };
}
