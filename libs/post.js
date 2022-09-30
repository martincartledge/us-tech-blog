import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { slugify } from "libs/string";
import { readingTime } from "libs/time";
import { splitDate } from "libs/date";
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

const validateMetadata = (fileName, metadata) => {
  const requiredFields = ["title", "date", "author", "category"];

  requiredFields.forEach((field) => {
    if (metadata[field] == null) {
      throw new Error(`${field} is required ${fileName}`);
    }
  });
};

const generateExcerpt = (html) => {
  const firstParagraph = new JSDOM(html).window.document.querySelector("p");

  return firstParagraph?.textContent ?? null;
};

export const getPost = async (slug) => {
  const fileName = findFileNameForSlug(slug);
  const filePath = path.join(POSTS_DIRECTORY, fileName);
  const file = fs.readFileSync(filePath, "utf8");
  const { metadata, markdown, html } = await parseMarkdownFile(file);

  validateMetadata(fileName, metadata);

  return {
    title: metadata.title,
    date: metadata.date,
    author: metadata.author, // case sensitive
    category: metadata.category.toLowerCase(), // case insensitive
    draft: metadata.draft ?? false,
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

export const getPublicPosts = async () => {
  const posts = await getPosts();
  const publicPosts = posts.filter((post) => !post.draft);

  return publicPosts;
};

export const getSlugs = async () => {
  const posts = await getPosts();
  const slugs = posts.map((post) => post.slug);

  return slugs;
};

export const getLegacyParams = async () => {
  const slugs = await getSlugs();
  const params = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPost(slug);
      const { year, month, day } = splitDate(post.date);
      return { year, month, day, slug };
    })
  );

  return params;
};
