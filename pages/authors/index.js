import { getAuthors } from "libs/author";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import Container from "components/Container";
import AuthorListSection from "components/AuthorListSection";
import Footer from "components/Footer";
import Main from "components/Main";

export default function AuthorsPage({ authors }) {
  return (
    <Main>
      <DocumentHead title="Authors" />
      <Navbar />
      <Container>
        <AuthorListSection title="Authors" authors={authors} />
      </Container>
      <Footer />
    </Main>
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
