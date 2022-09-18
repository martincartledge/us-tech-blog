import Link from "next/link";
import Container from "components/Container";
import Section from "components/Section";
import PostsGrid from "components/PostsGrid";
import styles from "components/PostGridSection/styles.module.css";

export default function PostGridSection({ posts, viewMoreLink = false }) {
  return (
    <Container>
      <Section>
        <PostsGrid posts={posts} />
        {viewMoreLink && (
          <div className={styles.linkContainer}>
            <Link href="/posts">
              <a className={styles.link}>View more posts</a>
            </Link>
          </div>
        )}
      </Section>
    </Container>
  );
}
