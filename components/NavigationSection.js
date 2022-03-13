import Link from "next/link";

export default function NavigationSection() {
  return (
    <>
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/archives">
            <a>Archives</a>
          </Link>
        </li>
        <li>
          <Link href="/authors">
            <a>Authors</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
