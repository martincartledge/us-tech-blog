import Container from "components/Container";
import Section from "components/Section";
import PostsGrid from "components/PostsGrid";
import LinkButton from "components/LinkButton";
import styles from "components/PostGridSection/styles.module.css";

export default function PostGridSection({ posts, viewMoreLink = false }) {
  return (
    <Container>
      <Section>
        <PostsGrid posts={posts} />
        {viewMoreLink && (
          <div className={styles.linkContainer}>
            <LinkButton href="/posts" text="View more posts" />
          </div>
        )}
      </Section>
    </Container>
  );
}
