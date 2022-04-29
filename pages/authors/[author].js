import Head from "next/head";
import ErrorPage from "next/error";
import PageContainer from "components/PageContainer";
import { getAuthors } from "libs/author";

export default function AuthorPage({ author }) {
  if (!author) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{author}</title>
      </Head>
      <PageContainer>
        <h3>{author}</h3>
      </PageContainer>
    </>
  );
}

export async function getStaticProps(author) {
  return {
    props: {
      author,
    },
  };
}

export async function getStaticPaths() {
  const authors = await getAuthors();

  return {
    paths: authors.map(author),
    fallback: false,
  };
}
