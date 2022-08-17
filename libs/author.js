import { getPosts } from "libs/post";

export const getAuthors = async () => {
  const posts = await getPosts();
  const authors = posts.map((post) => post.author);
  const uniqueAuthors = [...new Set(authors)];

  return uniqueAuthors;
};

export const getPostsByAuthor = async (author) => {
  const posts = await getPosts();
  const postsByAuthor = posts.filter((post) => post.author === author);

  return postsByAuthor;
};
