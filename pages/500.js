import Head from "next/head";
import ErrorMessage from "components/ErrorMessage";

export default function InternalServerErrorPage() {
  return (
    <>
      <Head>
        <title>Internal server error</title>
      </Head>
      <ErrorMessage message="Unexpected error" />
    </>
  );
}
