import { getCategories } from "libs/category";
import Header from "components/Header";
import Container from "components/Container";
import CategoryListSection from "components/CategoryListSection";

export default function CategoriesPage({ categories }) {
  return (
    <>
      <Header pageTitle="Categories" />
      <Container>
        <CategoryListSection title="Categories" categories={categories} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: {
      categories,
    },
  };
}
