import { Container } from 'reactstrap';
import styles from './styles.module.scss';

const CardsSection = function () {
    return (
        <>
            <p className={styles.sectionTitle}>WHAT DO YOU WANT TO ACCESS?</p>
            <Container className='d-flex flex-wrap justify-content-center gap-4 pb-5'>
                <div className={styles.card1}>
                    <p className={styles.cardTitle}>FRONT-END</p>
                    <p className={styles.cardDescription}>
                        Onebitcode Black is the place for you to evolve. For this, you will have access to advanced programming
                        practices, technology updates, and all the technical support you need to become a programming senior.
                    </p>
                </div>
                <div className={styles.card2}>
                    <p className={styles.cardTitle}>BACK-END</p>
                    <p className={styles.cardDescription}>
                        Onebitcode Black is the place for you to evolve. For this, you will have access to advanced programming
                        practices, technology updates, and all the technical support you need to become a programming senior.
                    </p>
                </div>
                <div className={styles.card3}>
                    <p className={styles.cardTitle}>MOBILE</p>
                    <p className={styles.cardDescription}>
                        Onebitcode Black is the place for you to evolve. For this, you will have access to advanced programming
                        practices, technology updates, and all the technical support you need to become a programming senior.
                    </p>
                </div>
                <div className={styles.card4}>
                    <p className={styles.cardTitle}>GIT AND GITHUB</p>
                    <p className={styles.cardDescription}>
                        Onebitcode Black is the place for you to evolve. For this, you will have access to advanced programming
                        practices, technology updates, and all the technical support you need to become a programming senior.
                    </p>
                </div>
                <div className={styles.card5}>
                    <p className={styles.cardTitle}>PROJECTS</p>
                    <p className={styles.cardDescription}>
                        Onebitcode Black is the place for you to evolve. For this, you will have access to advanced programming
                        practices, technology updates, and all the technical support you need to become a programming senior.
                    </p>
                </div>
                <div className={styles.card6}>
                    <p className={styles.cardTitle}>CAREERS</p>
                    <p className={styles.cardDescription}>
                        Onebitcode Black is the place for you to evolve. For this, you will have access to advanced programming
                        practices, technology updates, and all the technical support you need to become a programming senior.
                    </p>
                </div>
            </Container>
        </>
    );
};

export default CardsSection;
