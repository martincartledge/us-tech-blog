import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import OTLogo from "statics/OT_logo.png";
import GitHubLogo from "statics/github.png";
import LinkedInLogo from "statics/linkedin.png";
import TwitterLogo from "statics/twitter.png";
import Container from "components/Container";
import { FOOTER_LINKS } from "constants/app";

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.container}>
      <div className={styles.OTLogo}>
        <Link href="/">
          <a>
            <Image src={OTLogo} alt="OpenTable logo" />
          </a>
        </Link>
      </div>
      <div className={styles.socials}>
        <div className={styles.socialLogos}>
          <Link href="https://github.com/opentable">
            <a>
              <Image
                src={GitHubLogo}
                alt="GitHub logo"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <Link href="https://linkedin.com/company/opentable">
            <a>
              <Image
                src={LinkedInLogo}
                alt="LinkedIn logo"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <Link href="https://twitter.com/opentabletechuk">
            <a>
              <Image
                src={TwitterLogo}
                alt="Twitter logo"
                width={40}
                height={40}
              />
            </a>
          </Link>
        </div>

        <div className={styles.moreLinks}>
          <span className={styles.moreLinksHeader}>Learn more</span>
          {FOOTER_LINKS.map(({ href, text }) => (
            <Link href={href} key={href}>
              <a className={styles.moreLink}>
                <span>{text}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
