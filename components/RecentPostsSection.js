import PostList from "./PostList";

export default function RecentPostsSection({ posts }) {
  return (
    <>
      <h2>Recent posts</h2>
      <PostList posts={posts} />
    </>
  );
}
