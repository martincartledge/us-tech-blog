import { longDate } from "libs/date";
import Section from "components/Section";

export default function PostContentSection({ post }) {
  return (
    <Section>
      <h1>{post.title}</h1>
      <p>{longDate(post.date)}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Section>
  );
}
