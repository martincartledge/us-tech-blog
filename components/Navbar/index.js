import Link from "next/link";
import Image from "next/image";
import Container from "components/Container";
import { COMPANY_NAME, TEAM_NAME, NAVBAR_LINKS } from "constants/app";
import OTLogo from "statics/OT_logo.png";
import styles from "components/Navbar/styles.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Container className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              className={styles.logomark}
              src={OTLogo}
              alt="OpenTable logomark"
              width="50"
              height="50"
            />
            <div className={styles.logoText}>
              <span className={styles.companyName}>{COMPANY_NAME}&nbsp;</span>
              <span className={styles.teamName}>{TEAM_NAME}</span>
            </div>
          </a>
        </Link>
        <ul className={styles.links}>
          {NAVBAR_LINKS.map(({ href, text }) => (
            <li className={styles.linkItem} key={href}>
              <Link href={href}>
                <a className={styles.link}>{text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
