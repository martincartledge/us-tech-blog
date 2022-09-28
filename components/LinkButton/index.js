import Link from "next/link";
import styles from "components/LinkButton/styles.module.css";

export default function LinkButton({ href, text }) {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}
