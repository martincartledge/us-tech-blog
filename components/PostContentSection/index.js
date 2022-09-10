import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import csharp from "react-syntax-highlighter/dist/cjs/languages/prism/csharp";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import powershell from "react-syntax-highlighter/dist/cjs/languages/prism/powershell";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import cshtml from "react-syntax-highlighter/dist/cjs/languages/prism/cshtml";
import graphql from "react-syntax-highlighter/dist/cjs/languages/prism/graphql";
import yaml from "react-syntax-highlighter/dist/cjs/languages/prism/yaml";

import { longDate } from "libs/date";
import Section from "components/Section";

import styles from "./styles.module.css";

SyntaxHighlighter.registerLanguage("csharp", csharp);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("sh", powershell);
SyntaxHighlighter.registerLanguage("js", javascript);
SyntaxHighlighter.registerLanguage("ts", typescript);
SyntaxHighlighter.registerLanguage("html", cshtml);
SyntaxHighlighter.registerLanguage("graphql", graphql);
SyntaxHighlighter.registerLanguage("yml", yaml);

export default function PostContentSection({ post }) {
  const MarkdownComponents = {
    code({ node, inline, className, ...props }) {
      const match = /language-(\w+)/.exec(className || "") || [];

      return Boolean(match.length) ? (
        <SyntaxHighlighter
          style={prism}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  return (
    <Section>
      <h1>{post.title}</h1>
      <p>{longDate(post.date)}</p>
      <ReactMarkdown
        components={MarkdownComponents}
        className={styles.markdown}
      >
        {post.content}
      </ReactMarkdown>
    </Section>
  );
}
