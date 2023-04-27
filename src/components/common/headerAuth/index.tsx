import Head from 'next/head';
import styles from './styles.module.scss';
import { Container, Form, Input } from 'reactstrap';
import Link from 'next/link';

const HeaderAuth = function () {
    return (
        <>
            <Container className={styles.nav}>
                <Link href="/home">
                    <img
                        src="/imgs/logoOnebitflix.svg"
                        alt="logoOnebitflix"
                        className={styles.imgLogoNav}
                    />
                </Link>
                <div className='d-flex align-items-center'>
                    <Form>
                        <Input
                            name="search"
                            type="search"
                            placeholder="Search"
                            className={styles.input}
                        />
                    </Form>
                    {/* Search icon */}
                    <img
                        src="/imgs/homeAuth/iconSearch.svg"
                        alt="searchIcon"
                        className={styles.searchImg}
                    />
                    {/* The modal will be here, where the user initials will be sent */}
                    <p className={styles.userProfile}>AB</p>
                </div>
            </Container>
        </>
    );
};

export default HeaderAuth;
