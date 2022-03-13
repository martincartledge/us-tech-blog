import PostList from "./PostList";

export default function PostListSection({ title, posts }) {
  return (
    <>
      <h2>{title}</h2>
      <PostList posts={posts} />
    </>
  );
}
