import { getCategories } from "libs/category";
import DocumentHead from "components/DocumentHead";
import Header from "components/Header";
import Container from "components/Container";
import CategoryListSection from "components/CategoryListSection";
import Footer from "components/Footer";

export default function CategoriesPage({ categories }) {
  return (
    <>
      <DocumentHead title="Categories" />
      <Header />
      <Container>
        <CategoryListSection title="Categories" categories={categories} />
      </Container>
      <Footer />
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
