import styles from "components/Subtitle/styles.module.css";

export default function Subtitle({ value, ...props }) {
  return (
    <h3 className={styles.subtitle} {...props}>
      {value}
    </h3>
  );
}
