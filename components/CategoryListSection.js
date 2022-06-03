import Link from "next/link";
import Section from "components/Section";

export default function CategoryListSection({ title, categories }) {
  return (
    <Section>
      <h2>{title}</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/categories/${encodeURIComponent(category)}`}>
              <a>{category}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
