import styles from "components/MainContainer.module.css";

export default function MainContainer({ children }) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
}
