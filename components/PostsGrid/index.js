import styles from "components/PostsGrid/styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { longDate } from "libs/date";
import { getCategoryImage, readingTime } from "./utils";

const PostsGrid = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map((post) => (
        <Link
          href={`/posts/${encodeURIComponent(post.slug)}`}
          key={posts.indexOf(post)}
          passHref
        >
          <div className={styles.gridItem}>
            <Image src={getCategoryImage(post.category)} alt="Frontend" />
            <span className={styles.postCategory}>{post.category}</span>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <span className={styles.postDateAndReadingTime}>
              <div className={styles.postDate}>{longDate(post.date)}</div>
              <div>{`${readingTime(post.content)} min read`}</div>
            </span>

            <p>{post.content.substring(0, 100)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsGrid;
