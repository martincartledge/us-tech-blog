import ErrorPage from "next/error";
import { getPosts, getPost } from "libs/post";
import DocumentHead from "components/DocumentHead";
import Header from "components/Header";
import Container from "components/Container";
import PostContentSection from "components/PostContentSection";
import Footer from "components/Footer";
import Main from "components/Main";

export default function PostPage({ post }) {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Main>
      <DocumentHead title={post.title} />
      <Header />
      <Container>
        <PostContentSection post={post} />
      </Container>
      <Footer />
    </Main>
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
  const posts = await getPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
