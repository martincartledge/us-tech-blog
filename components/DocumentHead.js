import Head from "next/head";
import { BLOG_TITLE } from "constants/app";

export default function DocumentHead({ title }) {
  return (
    <Head>
      <title>{title ? title + " | " + BLOG_TITLE : BLOG_TITLE}</title>
    </Head>
  );
}
