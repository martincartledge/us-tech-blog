import styles from "components/Title/styles.module.css";

export default function Title({ value, ...props }) {
  return (
    <h2 className={styles.title} {...props}>
      {value}
    </h2>
  );
}
