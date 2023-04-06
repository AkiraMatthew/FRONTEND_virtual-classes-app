import { Button, Container } from 'reactstrap';
import styles from './styles.module.scss';

const HeaderNoAuth = function () {
    return (
        <>
            <div className={styles.ctaSection}>
                <img
                    src="/imgs/homeNoAuth/logoCta.png"
                    alt="logoCta"
                    className={styles.imgCta}
                />
                <p>Subscribe to earn access to our classes</p>
                <img
                    src="/imgs/homeNoAuth/logoCta.png"
                    alt="logoCta"
                    className={styles.imgCta}
                />
            </div>
            <Container>
                <img src="/imgs/logoOnebitflix.svg" alt="logoOnebitflix" />
                <div>
                    <Button outline color="primary">
                        Log in
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default HeaderNoAuth;
