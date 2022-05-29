import Link from "next/link";

export default function CategoryListSection({ title, categories }) {
  return (
    <section className="section">
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
    </section>
  );
}
