import Link from "next/link";
import Container from "components/Container";
import Section from "components/Section";
import { slugify } from "libs/string";
import styles from "components/AuthorListSection/styles.module.css";

export default function AuthorListSection({ authors }) {
  return (
    <Container>
      <Section>
        <ul className={styles.list}>
          {authors.map((author) => (
            <li key={author}>
              <Link href={`/authors/${slugify(author)}`}>
                <a>{author}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
