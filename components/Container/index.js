import styles from "components/Container/styles.module.css";
import classnames from 'classnames';

export default function Container({ className, children }) {
  return (
    <div className={styles.container + (className ? ` ${className}` : "")}>
      {children}
    </div>
  );
}
