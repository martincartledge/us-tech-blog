import ErrorPage from "next/error";
import {
  getAuthor,
  getPostsByAuthor,
  getSlugs,
  getLegacySlugRedirects,
} from "libs/author";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import PostGridSection from "components/PostGridSection";
import Header from "components/Header";
import Footer from "components/Footer";
import Page from "components/Page";
import Main from "components/Main";

export default function AuthorPage({ author, posts }) {
  if (!author) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Page>
      <DocumentHead title={`Posts by ${author}`} />
      <Navbar />
      <Header
        title={`Posts by ${author}`}
        subtitle={`${posts.length} posts in total`}
      />
      <Main>
        <PostGridSection title={author} posts={posts} />
      </Main>
      <Footer />
    </Page>
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
