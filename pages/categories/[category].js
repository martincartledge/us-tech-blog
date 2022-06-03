import ErrorPage from "next/error";
import { getCategories, getPostsByCategory } from "libs/category";
import Header from "components/Header";
import Container from "components/Container";
import PostListSection from "components/PostListSection";

export default function CategoryPage({ category, posts }) {
  if (!category) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Header pageTitle={`Posts in ${category}`} />
      <Container>
        <PostListSection title={category} posts={posts} />
      </Container>
    </>
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
