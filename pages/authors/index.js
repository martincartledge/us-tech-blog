import { getAuthors } from "libs/author";
import DocumentHead from "components/DocumentHead";
import Navbar from "components/Navbar";
import AuthorListSection from "components/AuthorListSection";
import Header from "components/Header";
import Footer from "components/Footer";
import Page from "components/Page";
import Main from "components/Main";

export default function AuthorsPage({ authors }) {
  return (
    <Page>
      <DocumentHead title="Authors" />
      <Navbar />
      <Header title={"All authors"} />
      <Main>
        <AuthorListSection authors={authors} />
      </Main>
      <Footer />
    </Page>
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
