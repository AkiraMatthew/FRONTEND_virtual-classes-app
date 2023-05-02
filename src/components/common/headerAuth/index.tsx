/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from './styles.module.scss';
import { Container, Form, Input } from 'reactstrap';
import Link from 'next/link';
import Modal from 'react-modal';
import { useState } from 'react';
import { useRouter } from 'next/router';

Modal.setAppElement('#__next');

const HeaderAuth = function () {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);

    const handeOpenModal = () => {
        setModalOpen(true);
    };
    const handeCloseModal = () => {
        setModalOpen(false);
    };
    const handleLogout = () => {
        //this will clear the session token and logout the user
        sessionStorage.clear();

        //this will redirect the user to HomeNoAuth
        router.push('/');
    };

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
                <div className="d-flex align-items-center">
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
                    <p className={styles.userProfile} onClick={handeOpenModal}>
                        AB
                    </p>
                </div>
                {/* The Modal is the field where the user informations will be */}
                <Modal
                    isOpen={modalOpen}
                    onRequestClose={handeCloseModal}
                    shouldCloseOnEsc={true}
                    className={styles.modal}
                    overlayClassName={styles.overlayModal}
                >
                    <Link href="/profile" className={styles.linkUnderline}>
                        <p className={styles.modalLink}>My Data</p>
                    </Link>
                    <p className={styles.modalLink} onClick={handleLogout}>
                        Log out
                    </p>
                </Modal>
            </Container>
        </>
    );
};

export default HeaderAuth;
