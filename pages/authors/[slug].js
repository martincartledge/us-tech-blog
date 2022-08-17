import ErrorPage from "next/error";
import { getAuthor, getPostsByAuthor, getSlugs } from "libs/author";
import DocumentHead from "components/DocumentHead";
import Header from "components/Header";
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
      <Header />
      <Container>
        <PostListSection title={author} posts={posts} />
      </Container>
      <Footer />
    </Main>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const author = await getAuthor(slug);
  const posts = await getPostsByAuthor(slug);

  return {
    props: {
      author,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
