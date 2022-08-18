import fs from "fs";
import path from "path";
import { slugify } from "libs/string";
import { readingTime } from "libs/time";
import { parseMarkdownFile } from "libs/markdown";

export const POSTS_DIRECTORY = path.join(process.cwd(), "_posts");

const readFileNames = () => {
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.includes(".md"));
};

const findFileNameForSlug = (slug) => {
  return readFileNames().find((fileName) => slugify(fileName) === slug);
};

const generateExcerpt = (html) => {
  const matchResult = html.match(/<p>(.+)<\/p>/);
  const captureGroup = matchResult ? matchResult[1] : null;

  return captureGroup;
};

export const getPost = async (slug) => {
  const fileName = findFileNameForSlug(slug);
  const filePath = path.join(POSTS_DIRECTORY, fileName);
  const file = fs.readFileSync(filePath, "utf8");
  const { metadata, markdown, html } = await parseMarkdownFile(file);

  return {
    title: metadata.title,
    date: metadata.date,
    author: metadata.author, // case sensitive
    category: metadata.category.toLowerCase(), // case insensitive
    slug: slugify(fileName),
    readingTime: readingTime(markdown),
    excerpt: generateExcerpt(html),
    html,
  };
};

export const getPosts = async () => {
  const fileNames = readFileNames();
  const slugs = fileNames.map(slugify);
  const posts = await Promise.all(slugs.map(getPost));
  const sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return sortedPosts;
};

export const getSlugs = async () => {
  const posts = await getPosts();
  const slugs = posts.map((post) => post.slug);

  return slugs;
};
