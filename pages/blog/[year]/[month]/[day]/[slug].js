import RedirectPage from "components/RedirectPage";
import { getLegacyParams } from "libs/post";

export default function BlogPostRedirect({ slug }) {
  return <RedirectPage destination={`/posts/${slug}`} />;
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      slug,
    },
  };
}

export async function getStaticPaths() {
  const params = await getLegacyParams();

  return {
    paths: params.map(({ year, month, day, slug }) => ({
      params: {
        year,
        month,
        day,
        slug,
      },
    })),
    fallback: false,
  };
}
