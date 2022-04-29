import Head from "next/head";
import ErrorPage from "next/error";
import PageContainer from "components/PageContainer";
import { getCategories } from "libs/category";

export default function CategoryPage({ category }) {
  if (!category) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      <PageContainer>
        <h3>{category}</h3>
      </PageContainer>
    </>
  );
}

export async function getStaticProps({ params: { category } }) {
  return {
    props: {
      category,
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
