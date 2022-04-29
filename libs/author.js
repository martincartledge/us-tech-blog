import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { POSTS_DIRECTORY, readFileNames } from "./post";

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
