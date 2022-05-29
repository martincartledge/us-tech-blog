import Head from "next/head";
import Header from "components/Header";
import CategoryListSection from "components/CategoryListSection";
import { getCategories } from "libs/category";

export default function CategoriesPage({ categories }) {
  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>
      <Header />
      <div className="container">
        <CategoryListSection title="Categories" categories={categories} />
      </div>
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
