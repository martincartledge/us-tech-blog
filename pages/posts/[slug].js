import ErrorPage from "next/error";
import { getPost, getSlugs } from "libs/post";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import PostContentSection from "components/PostContentSection";
import Footer from "components/Footer";
import PostHeader from "../../components/PostHeader";
import Page from "components/Page";
import Main from "components/Main";

export default function PostPage({ post }) {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Page>
      <DocumentHead title={post.title} description={post.excerpt} />
      <Navbar />
      <PostHeader post={post} />
      <Main>
        <PostContentSection post={post} />
      </Main>
      <Footer />
    </Page>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getSlugs();

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
