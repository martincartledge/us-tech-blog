import Head from "next/head";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header({ pageTitle }) {
  const BLOG_TITLE = "OpenTable Tech UK";
  const title = pageTitle ? pageTitle + " | " + BLOG_TITLE : BLOG_TITLE;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
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
      </div>
    </>
  );
}
