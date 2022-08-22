import ErrorPage from "next/error";
import { getAuthors, getPostsByAuthor } from "libs/author";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import Container from "components/Container";
import PostListSection from "components/PostListSection";
import Footer from "components/Footer";
import Main from "components/Main";

export default function AuthorPage({ author, posts }) {
  if (!author) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Main>
      <DocumentHead title={`Posts by ${author}`} />
      <Navbar />
      <Container>
        <PostListSection title={author} posts={posts} />
      </Container>
      <Footer />
    </Main>
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
