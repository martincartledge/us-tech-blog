import Container from "components/Container";
import Section from "components/Section";
import PostsGrid from "components/PostsGrid";

export default function PostGridSection({ posts }) {
  return (
    <Container>
      <Section>
        <PostsGrid posts={posts} />
      </Section>
    </Container>
  );
}
