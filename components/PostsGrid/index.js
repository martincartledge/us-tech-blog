import Image from "next/image";
import Link from "next/link";
import { longDate } from "libs/date";
import { slugify, capitalize } from "libs/string";
import styles from "components/PostsGrid/styles.module.css";

export default function PostsGrid({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map((post) => (
        <Link
          href={`/posts/${slugify(post.slug)}`}
          key={posts.indexOf(post)}
          passHref
        >
          <div className={styles.gridItem}>
            <Image
              className={styles.postImage}
              src={`/images/categories/${post.category}.png`}
              alt={`${post.category} thumbnail image`}
              width="1280"
              height="720"
            />
            <span className={styles.postCategory}>
              {capitalize(post.category)}
            </span>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <span className={styles.postDateAndReadingTime}>
              <div className={styles.postDate}>{longDate(post.date)}</div>
              <div>{`${post.readingTime} min read`}</div>
            </span>
            <p
              className={styles.postExcerpt}
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
