import Header from "components/Header";
import CategoryListSection from "components/CategoryListSection";
import { getCategories } from "libs/category";

export default function CategoriesPage({ categories }) {
  return (
    <>
      <Header pageTitle="Categories" />
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
