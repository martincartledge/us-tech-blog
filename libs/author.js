import { getPublicPosts } from "libs/post";
import { slugify } from "libs/string";

export const getAuthors = async () => {
  const posts = await getPublicPosts();
  const authors = posts.map((post) => post.author);
  const uniqueAuthors = [...new Set(authors)];

  return uniqueAuthors;
};

const legacySlugify = (author) => {
  const components = slugify(author).split("-");
  const firstNameFirstLetter = components[0].charAt(0);
  const remainingNames = components.slice(1).join("");

  return `${firstNameFirstLetter}${remainingNames}.html`;
};

export const getLegacySlugs = async () => {
  const authors = await getAuthors();
  const slugs = authors.map(legacySlugify);

  return slugs;
};

export const getSlugs = async () => {
  const authors = await getAuthors();
  const slugs = authors.map(slugify);

  return slugs;
};

export const getLegacyAuthor = async (slug) => {
  const posts = await getPublicPosts();
  const postByAuthor = posts.find(
    (post) => legacySlugify(post.author) === slug
  );
  const author = postByAuthor?.author;

  return author;
};

export const getAuthor = async (slug) => {
  const posts = await getPublicPosts();
  const postByAuthor = posts.find((post) => slugify(post.author) === slug);
  const author = postByAuthor?.author;

  return author;
};

export const getPostsByAuthor = async (slug) => {
  const posts = await getPublicPosts();
  const postsByAuthor = posts.filter((post) => slugify(post.author) === slug);

  return postsByAuthor;
};
