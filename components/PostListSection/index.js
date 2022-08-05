import Section from "components/Section";
import PostsGrid from "components/PostsGrid";

export default function PostListSection({ title, posts }) {
  return (
    <Section>
      <h2>{title}</h2>
      <PostsGrid posts={posts} />
    </Section>
  );
}
