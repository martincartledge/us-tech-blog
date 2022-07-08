import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import OTLogo from "statics/OT_logo.png";
import GitHubLogo from "statics/github.png";
import LinkedInLogo from "statics/linkedin.png";
import TwitterLogo from "statics/twitter.png";

const Footer = () => (
  <footer className={styles.footer}>
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
            <Image src={GitHubLogo} alt="GitHub logo" width={40} height={40} />
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
        <span className={styles.moreLinksHeader}>STAY CONNECTED</span>
        <Link href="https://www.opentable.co.uk">
          <a className={styles.moreLink}>
            <span>Opentable.co.uk</span>
          </a>
        </Link>
        <Link href="https://www.opentable.com/careers/technology/">
          <a className={styles.moreLink}>
            <span>Technology careers at OpenTable</span>
          </a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
