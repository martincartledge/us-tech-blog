import Head from "next/head";
import Header from "components/Header";
import PageContainer from "components/PageContainer";

export default function CategoriesPage() {
  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>
      <Header />
      <PageContainer>
        <h2>Categories</h2>
      </PageContainer>
    </>
  );
}
