import styles from '../styles/registerLogin.module.scss';
import Head from 'next/head';
import HeaderGeneric from '@/components/common/headerGeneric';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Footer from '@/components/common/footer';

const Login = function () {
    return (
        <>
            <Head>
                <title>Platform - LOGIN</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
            </Head>
            <main className={styles.main}>
                <HeaderGeneric logoUrl="/" btnUrl="/register" btnContent="Join Here" />
                <Container className="py-5">
                    <p className={styles.formTitle}>Welcome back</p>
                    <Form className={styles.form}>
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
                        <Button outline className={styles.formBtn}>Log in</Button>
                    </Form>
                    <Footer/>
                </Container>
            </main>
        </>
    );
};

export default Login;
