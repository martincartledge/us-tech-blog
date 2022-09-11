import Navbar from "components/Navbar";
import PostGridSection from "components/PostGridSection";
import Footer from "components/Footer";
import Page from "components/Page";
import JobSection from "components/JobSection";
import { getPublicPosts } from "libs/post";
import Main from "components/Main";

export default function HomePage({ posts }) {
  return (
    <Page>
      <Navbar />
      <Main>
        <PostGridSection title="Recent Posts" posts={posts} />
        <JobSection />
      </Main>
      <Footer />
    </Page>
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
