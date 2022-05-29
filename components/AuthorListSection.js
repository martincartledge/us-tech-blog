import Link from "next/link";

export default function AuthorListSection({ title, authors }) {
  return (
    <section className="section">
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
    </section>
  );
}
