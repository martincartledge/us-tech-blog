import { getCategories } from "libs/category";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import CategoryListSection from "components/CategoryListSection";
import Header from "components/Header";
import Footer from "components/Footer";
import Page from "components/Page";
import Main from "components/Main";

export default function CategoriesPage({ categories }) {
  return (
    <Page>
      <DocumentHead title="Categories" />
      <Navbar />
      <Header title={"All categories"} />
      <Main>
        <CategoryListSection categories={categories} />
      </Main>
      <Footer />
    </Page>
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
