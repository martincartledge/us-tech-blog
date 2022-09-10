import { getCategories } from "libs/category";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import CategoryListSection from "components/CategoryListSection";
import Header from "components/Header";
import Footer from "components/Footer";
import Main from "components/Main";

export default function CategoriesPage({ categories }) {
  return (
    <Main>
      <DocumentHead title="Categories" />
      <Navbar />
      <Header title={"All categories"} />
      <CategoryListSection categories={categories} />
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
