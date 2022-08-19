import Link from "next/link";
import { BLOG_TITLE } from "constants/app";
import styles from "components/Navbar/styles.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1>{BLOG_TITLE}</h1>
        </a>
      </Link>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/authors">
            <a>Authors</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/categories">
            <a>Categories</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
