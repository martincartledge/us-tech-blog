import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { POSTS_DIRECTORY, readFileNames, readMetadata } from "./post";

const readAuthor = (fileName) => {
  const filePath = path.join(POSTS_DIRECTORY, fileName);
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);

  return data.author;
};

export const getAuthors = async () => {
  const authors = readFileNames().map(readAuthor);
  return [...new Set(authors)];
};

export const getPostsByAuthor = async (author) => {
  return readFileNames()
    .map(readMetadata)
    .filter((post) => post.author === author)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};
