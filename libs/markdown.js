import matter from "gray-matter";
import { remark } from "remark";
import remarkHTML from "remark-html";

const generateHtml = async (content) => {
  const file = await remark().use(remarkHTML).process(content);

  return file.toString();
};

export const parseMarkdownFile = async (file) => {
  const { data, content } = matter(file);

  return {
    metadata: data,
    markdown: content,
    html: await generateHtml(content),
  };
};
