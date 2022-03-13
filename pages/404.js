import Head from "next/head";
import ErrorMessage from "components/ErrorMessage";

export default function NotFoundErrorPage() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <ErrorMessage message="Page not found" />
    </>
  );
}
