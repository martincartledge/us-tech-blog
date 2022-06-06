import { getAuthors } from "libs/author";
import DocumentHead from "components/DocumentHead";
import Header from "components/Header";
import Container from "components/Container";
import AuthorListSection from "components/AuthorListSection";

export default function AuthorsPage({ authors }) {
  return (
    <>
      <DocumentHead title="Authors" />
      <Header />
      <Container>
        <AuthorListSection title="Authors" authors={authors} />
      </Container>
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
