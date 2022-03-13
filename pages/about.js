import Head from "next/head";
import Header from "components/Header";
import PageContainer from "components/PageContainer";
import AboutSection from "components/AboutSection";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <PageContainer>
        <AboutSection />
      </PageContainer>
    </>
  );
}
