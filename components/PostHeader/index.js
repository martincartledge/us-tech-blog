import Link from 'next/link';
import Container from 'components/Container';
import Image from 'next/image';

import heroImage from 'statics/postHeroImage.png';
import postLogo from 'statics/OpenTableLogo.svg';

import { longDate } from 'libs/date';
import { capitalize } from 'libs/string';

import styles from 'components/PostHeader/styles.module.css';

export default function PostHeader({ post }) {
    const dateOfPost = longDate(post.date);
    return (
        <Container className={styles.headerContainer}>
            <header className={styles.header}>
                <div className={styles.headerContents}>
                    <div className={styles.titleContainer}>
                        <div>{capitalize(post.category)}</div>
                        <div>{post.title}</div>
                        <div className={styles.postDetails}>
                            <p>{`${dateOfPost}`}</p>
                            <p>{`${post.readingTime} min read`}</p>
                        </div>
                        <div className={styles.postLogoContainer}>
                            <Image src={postLogo} alt="opentable logo" />
                            <div className={styles.textContent}>
                                <p>OpenTable</p>
                                <p className={styles.teamName}>Tech Team</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <Image src={heroImage} alt="heroImage" />
                    </div>
                </div>

            </header>
        </Container>
    );
}
