import styles from "components/Container/styles.module.css";

export default function Container({ className, children }) {
  return (
    <div className={styles.container + (className ? ` ${className}` : "")}>
      {children}
    </div>
  );
}
