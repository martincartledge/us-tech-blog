import styles from "components/Section/styles.module.css";

const Section = ({ children }) => (
  <section className={styles.section}>{children}</section>
);

export default Section;
