import ErrorPage from "next/error";
import {
  getAuthor,
  getPostsByAuthor,
  getSlugs,
  getLegacySlugRedirects,
} from "libs/author";
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

export async function getStaticProps({ params: { slug } }) {
  const redirects = await getLegacySlugRedirects();

  if (redirects[slug]) {
    return {
      redirect: {
        destination: `/authors/${redirects[slug]}`,
        permanent: true,
      },
    };
  }

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
