import Link from "next/link";
import Image from "next/image";
import { COMPANY_NAME, DEPARTMENT_NAME, NAVBAR_LINKS } from "constants/app";
import Container from "components/Container";
import opentableLogo from "statics/opentable.png";
import styles from "components/Navbar/styles.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Container className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              className={styles.logomark}
              src={opentableLogo}
              alt="OpenTable logomark"
              width="50"
              height="50"
            />
            <div className={styles.logotype}>
              <span className={styles.companyName}>{COMPANY_NAME}&nbsp;</span>
              <span className={styles.departmentName}>{DEPARTMENT_NAME}</span>
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
