import styles from "components/Section.module.css";

export default function Section({ children }) {
  return <section className={styles.section}>{children}</section>;
}
