import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHTML from "remark-html";
import { slugify } from "libs/string";
import { readingTime } from "libs/time";

export const POSTS_DIRECTORY = path.join(process.cwd(), "_posts");

export const readFileNames = () => {
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.includes(".md"));
};

const generateHtml = async (content) => {
  const file = await remark().use(remarkHTML).process(post.content);

  return file.toString();
};

export const readMetadata = (fileName) => {
  const filePath = path.join(POSTS_DIRECTORY, fileName);
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  return {
    title: data.title,
    date: data.date,
    author: data.author, // case sensitive
    category: data.category.toLowerCase(), // case insensitive
    slug: slugify(fileName),
    readingTime: readingTime(content),
    content,
  };
};

export const getPosts = async () => {
  return readFileNames()
    .map(readMetadata)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getSlugs = async () => {
  const posts = await getPosts();
  const slugs = posts.map((post) => post.slug);

  return slugs;
};

const readFileNameForSlug = (slug) => {
  return readFileNames().find((fileName) => slugify(fileName) === slug);
};

export const getPost = async (slug) => {
  const fileName = readFileNameForSlug(slug);
  const post = readMetadata(fileName);
  post.html = generateHtml(post.content);

  return post;
};
