import Navbar from "components/Navbar";
import PostGridSection from "components/PostGridSection";
import Header from "components/Header";
import Footer from "components/Footer";
import Page from "components/Page";
import JobSection from "components/JobSection";
import { getPublicPosts } from "libs/post";
import Main from "components/Main";

export default function HomePage({ posts }) {
  return (
    <Page>
      <Navbar />
      <Header
        title="Welcome to the OpenTable Europe technology blog"
        subtitle="At the intersection of food, culture and technology"
      />
      <Main>
        <PostGridSection posts={posts} viewMoreLink />
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
