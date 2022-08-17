import { getPosts } from "libs/post";
import { slugify } from "libs/string";

export const getAuthors = async () => {
  const posts = await getPosts();
  const authors = posts.map((post) => post.author);
  const uniqueAuthors = [...new Set(authors)];

  return uniqueAuthors;
};

export const getSlugs = async () => {
  const authors = await getAuthors();
  const slugs = authors.map(slugify);

  return slugs;
};

export const getAuthor = async (slug) => {
  const authors = await getAuthors();
  const author = authors.find((author) => slugify(author) == slug);

  return author;
};

export const getPostsByAuthor = async (slug) => {
  const posts = await getPosts();
  const postsByAuthor = posts.filter((post) => slugify(post.author) === slug);

  return postsByAuthor;
};
