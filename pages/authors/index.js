import Header from "components/Header";
import { getAuthors } from "libs/author";
import AuthorListSection from "components/AuthorListSection";

export default function AuthorsPage({ authors }) {
  return (
    <>
      <Header pageTitle="Authors" />
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
