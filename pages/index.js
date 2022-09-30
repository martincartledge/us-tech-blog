import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import PostGridSection from "components/PostGridSection";
import Header from "components/Header";
import Footer from "components/Footer";
import Page from "components/Page";
import JobSection from "components/JobSection";
import { getPublicPosts } from "libs/post";
import Main from "components/Main";
import {
  HOME_TITLE,
  HOME_SUBTITLE,
  HOME_META_DESCRIPTION,
} from "constants/app";

export default function HomePage({ posts }) {
  return (
    <Page>
      <DocumentHead description={HOME_META_DESCRIPTION} />
      <Navbar />
      <Header title={HOME_TITLE} subtitle={HOME_SUBTITLE} />
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
