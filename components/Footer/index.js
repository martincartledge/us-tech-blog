import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import OTLogo from "statics/OT_logo.png";
import Container from "components/Container";
import { SITE_TITLE, SOCIAL_LINKS, LEARN_MORE_LINKS } from "constants/app";

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.container}>
      <div className={styles.top}>
        <div className={styles.OTLogo}>
          <Link href="/">
            <a>
              <Image src={OTLogo} alt="OpenTable logo" />
            </a>
          </Link>
        </div>
        <div className={styles.socials}>
          <div className={styles.socialLogos}>
            {SOCIAL_LINKS.map(({ name, href, image }) => (
              <Link href={href} key={href}>
                <a target="_blank" rel="noreferrer noopener">
                  <Image
                    className={styles.socialLogo}
                    src={image}
                    alt={`${name} logo`}
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
            ))}
          </div>
          <div className={styles.moreLinks}>
            <span className={styles.moreLinksHeader}>Learn more</span>
            {LEARN_MORE_LINKS.map(({ href, text }) => (
              <Link href={href} key={href}>
                <a className={styles.moreLink} target="_blank">
                  <span>{text}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          Copyright © {new Date().getFullYear()} {SITE_TITLE}. All rights
          reserved.
        </span>
      </div>
    </Container>
  </footer>
);

export default Footer;
