import Head from 'next/head';
import styles from '../styles/profile.module.scss';
import UserForm from '@/components/profile/user';

const UserInfo = function () {
    return (
        <>
            <Head>
                <title>Platform - My Data</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <UserForm />
            </main>
        </>
    );
};

export default UserInfo;