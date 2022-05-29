import Head from "next/head";
import Header from "components/Header";
import { getAuthors } from "libs/author";
import Link from "next/link";
import AuthorListSection from "components/AuthorListSection";

export default function AuthorsPage({ authors }) {
  return (
    <>
      <Head>
        <title>Authors</title>
      </Head>
      <Header />
      <div className="container">
        <AuthorListSection title="Authors" authors={authors} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const authors = await getAuthors();

  return {
    props: {
      authors,
    },
  };
}
