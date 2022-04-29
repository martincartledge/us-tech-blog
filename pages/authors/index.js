import Head from "next/head";
import Header from "components/Header";
import PageContainer from "components/PageContainer";
import { getAuthors } from "libs/author";
import Link from "next/link";

export default function AuthorsPage({ authors }) {
  return (
    <>
      <Head>
        <title>Authors</title>
      </Head>
      <Header />
      <PageContainer>
        <h2>Authors</h2>

        <ul>
          {authors.map((author) => (
            <li key={author}>
              <Link href={`/authors/${encodeURIComponent(author)}`}>
                <a>{author}</a>
              </Link>
            </li>
          ))}
        </ul>
      </PageContainer>
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
