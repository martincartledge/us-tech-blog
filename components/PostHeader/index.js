import Link from "next/link";
import Container from "components/Container";
import Section from "components/Section";
import AuthorImage from "components/AuthorImage";
import CategoryImage from "components/CategoryImage";
import { longDate } from "libs/date";
import { capitalize, slugify } from "libs/string";
import styles from "components/PostHeader/styles.module.css";

export default function PostHeader({ post }) {
  return (
    <header className={styles.header}>
      <Container>
        <Section>
          <div className={styles.container}>
            <div className={styles.details}>
              <Link href={`/categories/${slugify(post.category)}`}>
                <a className={styles.postCategory}>
                  {capitalize(post.category)}
                </a>
              </Link>
              <h1 className={styles.postTitle}>{post.title}</h1>
              <span className={styles.postDateAndReadingTime}>
                <div className={styles.postDate}>{longDate(post.date)}</div>
                <div>{`${post.readingTime} min read`}</div>
              </span>
              <div className={styles.author}>
                <div className={styles.authorImage}>
                  <AuthorImage name={post.author} />
                </div>
                <Link href={`/authors/${slugify(post.author)}`}>
                  <a className={styles.authorName}>{post.author}</a>
                </Link>
              </div>
            </div>
            <div className={styles.postImage}>
              <CategoryImage category={post.category} />
            </div>
          </div>
        </Section>
      </Container>
    </header>
  );
}
