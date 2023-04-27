import styles from '../styles/registerLogin.module.scss';
import Head from 'next/head';
import HeaderGeneric from '@/components/common/headerGeneric';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Footer from '@/components/common/footer';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import ToastComponent from '@/components/common/toast';
import authService from '@/services/authService';

const Login = function () {
    const router = useRouter();
    const [toastColor, setToastColor] = useState('');
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [ToastMessage, setToastMessage] = useState('');

    //Verification of the user token for the platform log in
    useEffect(() => {
        if(sessionStorage.getItem('platform-token')){
            router.push('/home')
        }
    }, [])

    useEffect(() => {
        const registerSuccess = router.query.registered;

        if (registerSuccess === 'true') {
            setToastColor('bg-success');
            setToastIsOpen(true);
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            setToastMessage('Successful registered');
        }
    }, [router.query]);

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email')!.toString();
        const password = formData.get('password')!.toString();
        const params = { email, password };

        const { status } = await authService.login(params);

        if (status === 200) {
            router.push('/home');
        } else {
            setToastColor('bg-danger');
            setToastIsOpen(true);
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            setToastMessage('Email or password are incorrect');
        }
    };

    return (
        <>
            <Head>
                <title>Platform - LOGIN</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
            </Head>
            <main className={styles.main}>
                <HeaderGeneric
                    logoUrl="/"
                    btnUrl="/register"
                    btnContent="Register Here"
                />
                <Container className="py-5">
                    <p className={styles.formTitle}>Welcome back</p>

                    <Form className={styles.form} onSubmit={handleLogin}>
                        <p className="text-center">
                            <strong>Welcome to the platform</strong>
                        </p>
                        {/* Here comes the start of the form inputs */}
                        {/* Email input */}
                        <FormGroup for="email" className={styles.label}>
                            <Label>EMAIL</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Ex.: bitponzi@gmail.com"
                                required
                                className={styles.input}
                            />
                        </FormGroup>
                        {/* Password input */}
                        <FormGroup for="password" className={styles.label}>
                            <Label> PASSWORD</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Ex.: HkP!555"
                                required
                                className={styles.input}
                            />
                        </FormGroup>
                        <Button outline type="submit" className={styles.formBtn}>
                            Log in
                        </Button>
                    </Form>
                    <ToastComponent
                        color={toastColor}
                        isOpen={toastIsOpen}
                        message={ToastMessage}
                    />
                    <Footer />
                </Container>
            </main>
        </>
    );
};

export default Login;
