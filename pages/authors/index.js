import { getAuthors } from "libs/author";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import AuthorListSection from "components/AuthorListSection";
import Header from "components/Header";
import Footer from "components/Footer";
import Main from "components/Main";

export default function AuthorsPage({ authors }) {
  return (
    <Main>
      <DocumentHead title="Authors" />
      <Navbar />
      <Header title={"All authors"} />
      <AuthorListSection authors={authors} />
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
