import { getCategories } from "libs/category";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import Container from "components/Container";
import CategoryListSection from "components/CategoryListSection";
import Footer from "components/Footer";
import Main from "components/Main";

export default function CategoriesPage({ categories }) {
  return (
    <Main>
      <DocumentHead title="Categories" />
      <Navbar />
      <Container>
        <CategoryListSection title="Categories" categories={categories} />
      </Container>
      <Footer />
    </Main>
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
