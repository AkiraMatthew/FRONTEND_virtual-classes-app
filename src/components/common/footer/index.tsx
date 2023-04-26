import { Container } from 'reactstrap';
import styles from './styles.module.scss';

const Footer = function () {
    return (
        <>
            <Container className={styles.footer}>
                <img
                    src="/imgs/logoOnebitcode.svg"
                    alt="logoFooter"
                    className={styles.footerLogo}
                />
                <a
                    href="http://github.com/AkiraMatthew"
                    target={'blank'}
                    className={styles.footerLink}
                >
                    Find me here!
                </a>
            </Container>
        </>
    );
};

export default Footer;
