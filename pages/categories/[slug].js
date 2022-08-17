import ErrorPage from "next/error";
import { getCategory, getPostsByCategory, getSlugs } from "libs/category";
import DocumentHead from "components/DocumentHead";
import Header from "components/Header";
import Container from "components/Container";
import PostListSection from "components/PostListSection";
import Footer from "components/Footer";
import Main from "components/Main";
import { capitalize } from "libs/string";

export default function CategoryPage({ category, posts }) {
  if (!category) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Main>
      <DocumentHead title={`Posts in ${category}`} />
      <Header />
      <Container>
        <PostListSection title={capitalize(category)} posts={posts} />
      </Container>
      <Footer />
    </Main>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const category = await getCategory(slug);
  const posts = await getPostsByCategory(category);

  return {
    props: {
      category,
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
