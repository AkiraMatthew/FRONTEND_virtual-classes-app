import { Button, Container } from 'reactstrap';
import styles from './styles.module.scss';
import Link from 'next/link';

const HeaderNoAuth = function () {
    return (
        <>
            <div className={styles.ctaSection}>
                <img src="/imgs/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
                <p>Subscribe to earn access to our classes</p>
                <img src="/imgs/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
            </div>
            <Container className={styles.nav}>
                <img src="/imgs/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav} />
                <div>
                    <Link href="/login">
                        <Button outline className={styles.navBtn}>
                            Log in
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button outline className={styles.navBtn}>
                            Sign In
                        </Button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default HeaderNoAuth;
