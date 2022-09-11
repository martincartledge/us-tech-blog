import Section from "components/Section";
import styles from "./styles.module.css";

export default function PostContentSection({ post }) {
  return (
    <Section>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Section>
  );
}
