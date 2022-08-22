import { getPosts } from "libs/post";
import { slugify } from "libs/string";

export const getAuthors = async () => {
  const posts = await getPosts();
  const authors = posts.map((post) => post.author);
  const uniqueAuthors = [...new Set(authors)];

  return uniqueAuthors;
};

const legacySlugify = (author) => {
  const components = slugify(author).split("-");
  const firstNameFirstLetter = components[0].charAt(0);
  const remainingNames = components.slice(1).join("");

  return `${firstNameFirstLetter}${remainingNames}`;
};

export const getSlugs = async () => {
  const authors = await getAuthors();
  const newSlugs = authors.map(slugify);
  const legacySlugs = authors.map(legacySlugify);
  const slugs = [...newSlugs, ...legacySlugs];

  return slugs;
};

export const getLegacySlugRedirects = async () => {
  const authors = await getAuthors();

  return authors.reduce((redirects, author) => {
    redirects[legacySlugify(author)] = slugify(author);
    return redirects;
  }, {});
};

export const getAuthor = async (slug) => {
  const posts = await getPosts();
  const postByAuthor = posts.find((post) => slugify(post.author) === slug);
  const author = postByAuthor?.author;

  return author;
};

export const getPostsByAuthor = async (slug) => {
  const posts = await getPosts();
  const postsByAuthor = posts.filter((post) => slugify(post.author) === slug);

  return postsByAuthor;
};
