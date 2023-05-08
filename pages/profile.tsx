import Head from 'next/head';
import styles from '../styles/profile.module.scss';
import UserForm from '@/components/profile/user';
import HeaderAuth from '@/components/common/headerAuth';
import Footer from '@/components/common/footer';
import { Button, Col, Container, Row } from 'reactstrap';

const UserInfo = function () {
    return (
        <>
            <Head>
                <title>Platform - My Data</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div className={styles.header}>
                    <HeaderAuth />
                </div>
                <Container className="py-5">
                    <p className={styles.title}>My account</p>
                    <Row className="pt-3 pb-5">
                        {/* The bootstrap grid is divided in 12, in the following md col size, it will have the 4 size */}
                        <Col md={4} className={styles.btnColumn}>
                            <Button className={styles.renderForm}>Personal Data</Button>
                            <Button className={styles.renderForm}>Password</Button>
                        </Col>
                        <Col md>
                            <UserForm />
                        </Col>
                    </Row>
                </Container>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default UserInfo;
