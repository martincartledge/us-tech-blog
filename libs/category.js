import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { POSTS_DIRECTORY, readFileNames } from "./post";

const readCategory = (fileName) => {
  const filePath = path.join(POSTS_DIRECTORY, fileName);
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);

  return data.tags ?? [];
};

export const getCategories = async () => {
  const categories = readFileNames().map(readCategory).flat();
  return [...new Set(categories)];
};
