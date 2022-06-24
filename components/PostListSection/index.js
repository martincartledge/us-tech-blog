import Link from "next/link";
import { longDate } from "libs/date";
import Section from "components/Section";

export default function PostListSection({ title, posts }) {
  return (
    <Section>
      <h2>{title}</h2>
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
    </Section>
  );
}
