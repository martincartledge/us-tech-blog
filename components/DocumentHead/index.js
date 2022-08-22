import Head from "next/head";
import { SITE_TITLE } from "constants/app";

export default function DocumentHead({ title }) {
  return (
    <Head>
      <title>{title ? title + " | " + SITE_TITLE : SITE_TITLE}</title>
    </Head>
  );
}
