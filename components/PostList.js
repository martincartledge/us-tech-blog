import { longDate } from "libs/date";
import styles from "components/PostList.module.css";

export default function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <a href={`/${post.slug}`} className={styles.card} key={post.slug}>
          <h2>{post.title} &rarr;</h2>
          <p>{longDate(post.date)}</p>
        </a>
      ))}
    </>
  );
}
