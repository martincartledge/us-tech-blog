import Link from "next/link";
import Container from "components/Container";
import AuthorImage from "components/AuthorImage";
import CategoryImage from "components/CategoryImage";
import { longDate } from "libs/date";
import { capitalize, slugify } from "libs/string";
import styles from "components/PostHeader/styles.module.css";

export default function PostHeader({ post }) {
  const dateOfPost = longDate(post.date);

  return (
    <Container className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.headerContents}>
          <div className={styles.titleContainer}>
            <div>{capitalize(post.category)}</div>
            <div>{post.title}</div>
            <div className={styles.postDetails}>
              <p>{`${dateOfPost}`}</p>
              <p>{`${post.readingTime} min read`}</p>
            </div>
            <div className={styles.authorContainer}>
              <div className={styles.authorImageContainer}>
                <AuthorImage
                  name={post.author}
                  className={styles.authorImage}
                />
              </div>
              <Link href={`/authors/${slugify(post.author)}`}>
                <a className={styles.authorName}>{post.author}</a>
              </Link>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <CategoryImage category={post.category} />
          </div>
        </div>
      </header>
    </Container>
  );
}
