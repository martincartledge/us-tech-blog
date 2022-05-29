import { longDate } from "libs/date";

export default function PostContentSection({ post }) {
  return (
    <section className="section">
      <h1>{post.title}</h1>
      <p>{longDate(post.date)}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </section>
  );
}
