import Head from "next/head";
import { SITE_NAME } from "constants/app";

export default function DocumentHead({ title, description }) {
  const htmlTags = (
    <>
      <title>{title ? `${title} | ${SITE_NAME}` : SITE_NAME}</title>
      {description && <meta name="description" content={description} />}
    </>
  );

  const openGraphTags = (
    <>
      <meta property="og:title" content={title ?? SITE_NAME} />
      {description && <meta name="og:description" content={description} />}
      <meta property="og:site_name" content={SITE_NAME} />
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
