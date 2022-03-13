import Head from "next/head";
import ErrorPage from "next/error";
import { getPosts, getPost } from "libs/post";
import PostHead from "components/PostHead";
import PostBody from "components/PostBody";
import MainContainer from "components/MainContainer";

export default function PostPage({ post }) {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <MainContainer>
        <PostHead title={post.title} date={post.date} />
        <PostBody html={post.html} />
      </MainContainer>
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
