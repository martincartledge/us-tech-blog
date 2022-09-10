import Container from "components/Container";
import styles from "components/Header/styles.module.css";
import Section from "components/Section";

export default function Header({ title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Section>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
        </Section>
      </Container>
    </div>
  );
}
