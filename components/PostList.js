import Link from "next/link";
import { longDate } from "libs/date";

export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
            <a>
              {post.title} ({longDate(post.date)}) &rarr;
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
