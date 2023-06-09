/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './styles.module.scss';
import { Container, Row, Col, Button } from 'reactstrap';

const PresentationSection = function () {
    return (
        <>
            <Container className="py-4">
                <Row>
                    <Col md className="d-flex flex-column justify-content-center">
                        <p className={styles.subTitle}>UNLIMITED ACCESS</p>
                        <p className={styles.title}>
                            Have access to the best <br /> software development tutorials.
                        </p>
                        <p className={styles.description}>
                            Study anywhere and anytime, and keep <br />
                            evolving as developer.
                        </p>
                        <Link href="/register" className={styles.linkUnderline}>
                            <Button outline className={styles.btnCta}>
                                ACCESS NOW{' '}
                                <img
                                    src="/imgs/buttonPlay.svg"
                                    alt="button_img"
                                    className={styles.btnImg}
                                />
                            </Button>
                        </Link>
                    </Col>
                    <Col md>
                        <img
                            src="/imgs/homeNoAuth/imgPresentation.png"
                            alt="imgIndex"
                            className={styles.imgPresentation}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center pt-5">
                        <img
                            src="/imgs/homeNoAuth/iconArrowDown.svg"
                            alt="arrowDown"
                            className={styles.arrowDown}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PresentationSection;
