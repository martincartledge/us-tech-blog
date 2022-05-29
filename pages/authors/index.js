import Head from "next/head";
import Header from "components/Header";
import { getAuthors } from "libs/author";
import Link from "next/link";

export default function AuthorsPage({ authors }) {
  return (
    <>
      <Head>
        <title>Authors</title>
      </Head>
      <Header />
      <div className="container">
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
