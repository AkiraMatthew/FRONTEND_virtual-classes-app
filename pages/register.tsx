import HeaderGeneric from '@/components/common/headerGeneric';
import styles from '../styles/registerLogin.module.scss';
import Head from 'next/head';

const Register = function () {
    return (
        <>
            <Head>
                <title>OnebitFLix - Register</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <HeaderGeneric logoUrl='/' btnUrl='/login' btnContent='Log in' />
            </main>
        </>
    );
};

export default Register;
