import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import rehypeStringify from "rehype-stringify";

const generateHtml = async (content) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeExternalLinks, {
      target: "_blank",
      rel: ["noreferrer", "noopener"],
    })
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(content);

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
