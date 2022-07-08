import { getAuthors } from "libs/author";
import DocumentHead from "components/DocumentHead";
import Header from "components/Header";
import Container from "components/Container";
import AuthorListSection from "components/AuthorListSection";
import Footer from "components/Footer";

export default function AuthorsPage({ authors }) {
  return (
    <>
      <DocumentHead title="Authors" />
      <Header />
      <Container>
        <AuthorListSection title="Authors" authors={authors} />
      </Container>
      <Footer />
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
