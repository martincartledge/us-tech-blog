import { getPosts } from "libs/post";

export const getCategories = async () => {
  const posts = await getPosts();
  const categories = posts.map((post) => post.category);
  const uniqueCategories = [...new Set(categories)];

  return uniqueCategories;
};

export const getPostsByCategory = async (category) => {
  const posts = await getPosts();
  const postsByCategory = posts.filter((post) => post.category === category);

  return postsByCategory;
};
