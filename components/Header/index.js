import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import Subtitle from "components/Subtitle";
import styles from "components/Header/styles.module.css";

export default function Header({ title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Section>
          <Title value={title} />
          {subtitle && <Subtitle value={subtitle} />}
        </Section>
      </Container>
    </div>
  );
}
