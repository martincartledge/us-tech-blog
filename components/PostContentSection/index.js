import { longDate } from "libs/date";
import Section from "components/Section";
import styles from "./styles.module.css";

export default function PostContentSection({ post }) {
  return (
    <Section>
      <h1>{post.title}</h1>
      <p>{longDate(post.date)}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Section>
  );
}
