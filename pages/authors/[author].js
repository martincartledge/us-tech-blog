import ErrorPage from "next/error";
import { getAuthors, getPostsByAuthor } from "libs/author";
import DocumentHead from "components/DocumentHead";
import Header from "components/Header";
import Container from "components/Container";
import PostListSection from "components/PostListSection";

export default function AuthorPage({ author, posts }) {
  if (!author) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <DocumentHead title={`Posts by ${author}`} />
      <Header />
      <Container>
        <PostListSection title={author} posts={posts} />
      </Container>
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
