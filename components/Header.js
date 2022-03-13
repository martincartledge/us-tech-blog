import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
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
          <Link href="/archives">
            <a>Archives</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/authors">
            <a>Authors</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
