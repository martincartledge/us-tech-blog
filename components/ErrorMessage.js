import styles from "components/ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Page not found</h1>
      </main>
    </div>
  );
}
