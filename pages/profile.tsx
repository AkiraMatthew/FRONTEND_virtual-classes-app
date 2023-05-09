import Head from 'next/head';
import styles from '../styles/profile.module.scss';
import UserForm from '@/components/profile/user';
import HeaderAuth from '@/components/common/headerAuth';
import Footer from '@/components/common/footer';
import { Button, Col, Container, Row } from 'reactstrap';
import { useState } from 'react';
import PasswordForm from '@/components/profile/password';

const UserInfo = function () {
    //We're going to have 2 states on the form and need to change between the user and password state
    const [form, setForm] = useState('userForm');

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
                            <Button
                                className={styles.renderForm}
                                style={{color: form === 'userForm' ? '#FF0044' : 'white'}}
                                onClick={() => {
                                    setForm('userForm');
                                }}
                            >
                                Personal Data
                            </Button>
                            <Button
                                className={styles.renderForm}
                                style={{color: form === 'passwordForm' ? '#FF0044' : 'white'}}
                                onClick={() => {
                                    setForm('passwordForm');
                                }}
                            >
                                Password
                            </Button>
                        </Col>
                        <Col md>
                            {/* making the conditional renderization by using the useState */}
                            {form === 'userForm' ? <UserForm/> : <PasswordForm/>}
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
