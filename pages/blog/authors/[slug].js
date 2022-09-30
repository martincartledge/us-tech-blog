import ErrorPage from "next/error";
import RedirectPage from "components/RedirectPage";
import { getLegacySlugs, getLegacyAuthor } from "libs/author";
import { slugify } from "libs/string";

export default function BlogAuthorRedirect({ author }) {
  if (!author) {
    return <ErrorPage statusCode={404} />;
  }

  return <RedirectPage destination={`/authors/${slugify(author)}`} />;
}

export async function getStaticProps({ params: { slug } }) {
  const author = await getLegacyAuthor(slug);

  return {
    props: {
      author,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getLegacySlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
