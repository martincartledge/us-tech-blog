import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SOCIAL_LINKS, LEARN_MORE_LINKS } from "constants/app";
import Container from "components/Container";
import opentableLogo from "statics/opentable.png";
import styles from "components/Footer/styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.top}>
          <div className={styles.OTLogo}>
            <Link href="/">
              <a>
                <Image src={opentableLogo} alt="OpenTable logo" />
              </a>
            </Link>
          </div>
          <div className={styles.socials}>
            <ul className={styles.socialLogos}>
              {SOCIAL_LINKS.map(({ name, href, image }) => (
                <li className={styles.socialLogoLinkItem} key={href}>
                  <Link href={href}>
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
                </li>
              ))}
            </ul>
            <div className={styles.moreLinks}>
              <span className={styles.moreLinksHeader}>Learn more</span>
              <ul>
                {LEARN_MORE_LINKS.map(({ href, text }) => (
                  <li key={href}>
                    <Link href={href} key={href}>
                      <a className={styles.moreLink} target="_blank">
                        <span>{text}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            Copyright © {new Date().getFullYear()} {SITE_NAME}. All rights
            reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
