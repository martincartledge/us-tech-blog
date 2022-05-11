import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1>OpenTable UK Tech Blog</h1>
        </a>
      </Link>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
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
