import ErrorPage from "next/error";
import { getCategories, getPostsByCategory } from "libs/category";
import DocumentHead from "components/DocumentHead";
import Header from "components/Header";
import Container from "components/Container";
import PostListSection from "components/PostListSection";
import Footer from "components/Footer";
import Main from "components/Main";

export default function CategoryPage({ category, posts }) {
  if (!category) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Main>
      <DocumentHead title={`Posts in ${category}`} />
      <Header />
      <Container>
        <PostListSection title={category} posts={posts} />
      </Container>
      <Footer />
    </Main>
  );
}

export async function getStaticProps({ params: { category } }) {
  const posts = await getPostsByCategory(category);

  return {
    props: {
      category,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();

  return {
    paths: categories.map((category) => ({
      params: {
        category,
      },
    })),
    fallback: false,
  };
}
