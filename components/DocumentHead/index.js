import Head from "next/head";
import { SITE_TITLE } from "constants/app";

export default function DocumentHead({ title, description }) {
  const htmlTags = (
    <>
      <title>{title ? `${title} | ${SITE_TITLE}` : SITE_TITLE}</title>
      {description && <meta name="description" content={description} />}
    </>
  );

  const openGraphTags = (
    <>
      <meta property="og:title" content={title ?? SITE_TITLE} />
      {description && <meta name="og:description" content={description} />}
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="og:type" content="website" />
    </>
  );

  return (
    <Head>
      {htmlTags}
      {openGraphTags}
    </Head>
  );
}
