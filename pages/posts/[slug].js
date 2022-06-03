import ErrorPage from "next/error";
import { getPosts, getPost } from "libs/post";
import Header from "components/Header";
import Container from "components/Container";
import PostContentSection from "components/PostContentSection";

export default function PostPage({ post }) {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Header pageTitle={post.title} />
      <Container>
        <PostContentSection post={post} />
      </Container>
    </>
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
