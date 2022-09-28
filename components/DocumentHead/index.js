import Head from "next/head";
import { SITE_TITLE } from "constants/app";

export default function DocumentHead({ title, description }) {
  return (
    <Head>
      <title>{title ? title + " | " + SITE_TITLE : SITE_TITLE}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
}
