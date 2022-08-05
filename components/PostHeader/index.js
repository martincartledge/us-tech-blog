import Link from "next/link";
import Container from "components/Container";
import {BLOG_TITLE} from "constants/app";
import OTLogo from "statics/OT_logo.png";
import Image from "next/image";
import heroImage from "statics/postHeroImage.png";
import postLogo from "statics/OpenTableLogo.svg";
import styles from "components/PostHeader/styles.module.css";

export default function PostHeader({post}) {
    const dateOfPost = new Date(post.date)
    return (
        <Container className={styles.headerContainer}>
            <header className={styles.header}>
                <div className={styles.navElements}>
                    <div className={styles.navLogoContainer}>
                        <div className={styles.navLogo}>
                            <Link href="/">
                                <a>
                                    <Image src={OTLogo} alt="OpenTable logo"/>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.navLogoText}>
                        <Link href="/">
                            <a>
                                <h1 className={styles.textContent}>{BLOG_TITLE}</h1>
                            </a>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.headerContents}>
                    <div className={styles.titleContainer}>
                        <div>{post.title}</div>
                        <p className={styles.postDate}>{dateOfPost && dateOfPost.toDateString()}</p>
                        <div className={styles.postLogoContainer}>
                            <Image src={postLogo} alt="opentable logo"/>
                            <div className={styles.textContent}>
                                <p>OpenTable</p>
                                <p className={styles.teamName}>Tech Team</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.heroImage}>
                        <Image src={heroImage} alt="heroImage"/>

                    </div>
                </div>

            </header>
        </Container>
    );
}
