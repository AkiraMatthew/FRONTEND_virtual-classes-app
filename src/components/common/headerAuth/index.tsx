/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from './styles.module.scss';
import { Container, Form, Input } from 'reactstrap';
import Link from 'next/link';
import Modal from 'react-modal';
import { useState } from 'react';

const HeaderAuth = function () {
    const [modalOpen, setModalOpen] = useState(false);

    const handeOpenModal = () => {
        setModalOpen(true);
    };
    const handeCloseModal = () => {
        setModalOpen(false);
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
                ></Modal>
            </Container>
        </>
    );
};

export default HeaderAuth;
