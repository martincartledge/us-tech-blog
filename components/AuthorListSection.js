import Link from "next/link";
import Section from "components/Section";

export default function AuthorListSection({ title, authors }) {
  return (
    <Section>
      <h2>{title}</h2>
      <ul>
        {authors.map((author) => (
          <li key={author}>
            <Link href={`/authors/${encodeURIComponent(author)}`}>
              <a>{author}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
