import styles from "components/Section/styles.module.css";

export default function Section({ children }) {
  return <section className={styles.section}>{children}</section>;
}
