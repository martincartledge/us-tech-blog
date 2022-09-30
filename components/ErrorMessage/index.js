import Container from "components/Container";
import Section from "components/Section";
import Title from "components/Title";
import Subtitle from "components/Subtitle";
import LinkButton from "components/LinkButton";
import styles from "components/ErrorMessage/styles.module.css";

export default function ErrorMessage({
  title,
  subtitle,
  buttonHref,
  buttonText,
}) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Section>
          <Title value={title} />
          {subtitle && <Subtitle value={subtitle} />}
          <div className={styles.linkContainer}>
            <LinkButton href={buttonHref} text={buttonText} />
          </div>
        </Section>
      </Container>
    </div>
  );
}
