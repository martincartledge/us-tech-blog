import { getPosts } from "libs/post";
import { slugify } from "libs/string";

export const getCategories = async () => {
  const posts = await getPosts();
  const categories = posts.map((post) => post.category);
  const uniqueCategories = [...new Set(categories)];

  return uniqueCategories;
};

export const getSlugs = async () => {
  const categories = await getCategories();
  const slugs = categories.map(slugify);

  return slugs;
};

export const getCategory = async (slug) => {
  const categories = await getCategories();
  const category = categories.find((category) => slugify(category) == slug);

  return category;
};

export const getPostsByCategory = async (slug) => {
  const posts = await getPosts();
  const postsByCategory = posts.filter(
    (post) => slugify(post.category) === slug
  );

  return postsByCategory;
};
