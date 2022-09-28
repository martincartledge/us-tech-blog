import Link from "next/link";
import Container from "components/Container";
import Section from "components/Section";
import { slugify, capitalize } from "libs/string";
import styles from "components/CategoryListSection/styles.module.css";

export default function CategoryListSection({ categories }) {
  return (
    <Container>
      <Section>
        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/categories/${slugify(category)}`}>
                <a>{capitalize(category)}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
