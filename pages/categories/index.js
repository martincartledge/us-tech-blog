import Head from "next/head";
import Header from "components/Header";
import PageContainer from "components/PageContainer";
import { getCategories } from "libs/category";
import Link from "next/link";

export default function CategoriesPage({ categories }) {
  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>
      <Header />
      <PageContainer>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/categories/${encodeURIComponent(category)}`}>
                <a>{category}</a>
              </Link>
            </li>
          ))}
        </ul>
      </PageContainer>
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
