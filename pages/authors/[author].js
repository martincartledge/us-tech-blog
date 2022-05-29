import Head from "next/head";
import ErrorPage from "next/error";
import { getAuthors, getPostsByAuthor } from "libs/author";
import PostListSection from "components/PostListSection";
import Header from "components/Header";

export default function AuthorPage({ author, posts }) {
  if (!author) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{author}</title>
      </Head>
      <Header />
      <div className="container">
        <PostListSection title={author} posts={posts} />
      </div>
    </>
  );
}

export async function getStaticProps({ params: { author } }) {
  const posts = await getPostsByAuthor(author);

  return {
    props: {
      author,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const authors = await getAuthors();

  return {
    paths: authors.map((author) => ({
      params: {
        author,
      },
    })),
    fallback: false,
  };
}
