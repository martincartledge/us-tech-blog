import Section from "components/Section";
import PostsGrid from "components/PostsGrid";

export default function PostGridSection({ posts }) {
  return (
    <Section>
      <PostsGrid posts={posts} />
    </Section>
  );
}
