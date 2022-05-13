import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHTML from "remark-html";

export const POSTS_DIRECTORY = path.join(process.cwd(), "_posts");

export const slugify = (str) => str.replace(/\.md$/, "");

export const readFileNames = () => {
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.includes(".md"));
};

const readFileNameForSlug = (slug) => {
  return readFileNames().find((fileName) => slugify(fileName) === slug);
};

export const readMetadata = (fileName) => {
  const filePath = path.join(POSTS_DIRECTORY, fileName);
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  return {
    title: data.title,
    date: data.date,
    author: data.author?.toLowerCase(),
    tags: data.tags?.map((t) => t.toLowerCase()) ?? [],
    slug: slugify(fileName),
    content,
  };
};

export const getPosts = async () => {
  return readFileNames()
    .map(readMetadata)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPost = async (slug) => {
  const fileName = readFileNameForSlug(slug);
  const post = readMetadata(fileName);
  const file = await remark().use(remarkHTML).process(post.content);
  post.html = file.toString();

  return post;
};
