import styles from '../styles/registerLogin.module.scss';
import Head from 'next/head';
import HeaderGeneric from '@/components/common/headerGeneric';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Footer from '@/components/common/footer';
import { FormEvent, useState } from 'react'; //it will be used as Type from our event
import authService from '@/services/authService';
import { useRouter } from 'next/router';
import ToastComponent from '@/components/common/toast';

const Register = function () {
    const router = useRouter(); //that makes possible to us to navigate throgth folders by using the routes

    //Adding the states for ToastIsOpen and ToastMessage
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [ToastMessage, setToastMessage] = useState('');

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const firstName = formData.get('firstName')!.toString();
        const lastName = formData.get('lastName')!.toString();
        const phone = formData.get('phone')!.toString();
        const birth = formData.get('birth')!.toString();
        const email = formData.get('email')!.toString();
        const password = formData.get('password')!.toString();
        const confirmPassword = formData.get('confirmPassword')!.toString();
        //now we create an object to receive all the constansts we received
        const params = {
            firstName,
            lastName,
            phone,
            birth,
            email,
            password,
            confirmPassword,
        };

        if (password != confirmPassword) {
            setToastIsOpen(true);
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            setToastMessage('The passwords do not match');

            return;
        }

        //now we're going to receive the data, authenticate and send it to the backend
        const { data, status } = await authService.register(params);

        if (status === 201) {
            router.push('/login?registered=true');
        } else {
            setToastIsOpen(true);
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
            setToastMessage(data.message);
        }
    };

    return (
        <>
            <Head>
                <title>OnebitFLix - Register</title>
                <link rel="icon" href="/imgs/favicon.svg" type="image/x-icon" />
                {/* This script from jsuites do not accept to be used in any other way, so in this case we need to use as it is and not follow the NextJS documentation */}
                <script src="https://jsuites.net/v4/jsuites.js"></script>
            </Head>
            <main className={styles.main}>
                <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Log in" />
                <Container className="py-5">
                    <p className={styles.formTitle}>
                        <strong>Welcome the platform</strong>
                    </p>
                    <Form className={styles.form} onSubmit={handleRegister}>
                        <p className="text-center">
                            <strong>Create your account!</strong>
                        </p>
                        {/* First name input */}
                        <FormGroup>
                            <Label for="firstName" className={styles.label}>
                                NAME
                            </Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="Type your first name"
                                required
                                maxLength={20}
                                className={styles.inputName}
                            />
                        </FormGroup>
                        {/* Last name input */}
                        <FormGroup>
                            <Label for="lastName" className={styles.label}>
                                LAST NAME
                            </Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Type your last name"
                                required
                                maxLength={20}
                                className={styles.inputName}
                            />
                        </FormGroup>
                        {/* Cellphone input */}
                        <FormGroup>
                            <Label for="lastName" className={styles.label}>
                                CELLPHONE NUMBER
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+xx (xx) xxxx-xxxx"
                                data-mask="[-]+00 (00) 00000-000000"
                                required
                                className={styles.input}
                            />
                        </FormGroup>
                        {/* Email input */}
                        <FormGroup>
                            <Label for="email" className={styles.label}>
                                E-MAIL
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Type your email"
                                required
                                className={styles.input}
                            />
                        </FormGroup>
                        {/* Birthday input */}
                        <FormGroup>
                            <Label for="birth" className={styles.label}>
                                BIRTHDAY
                            </Label>
                            <Input
                                id="birth"
                                name="birth"
                                type="date"
                                min="1900-01-01"
                                max="2022-12-31"
                                required
                                className={styles.input}
                            />
                        </FormGroup>
                        {/* Password input */}
                        <FormGroup>
                            <Label for="password" className={styles.label}>
                                PASSWORD
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Type your password (Min: 6 | Max: 20)"
                                required
                                minLength={6}
                                maxLength={20}
                                className={styles.input}
                            />
                        </FormGroup>
                        {/* Password Confirm input */}
                        <FormGroup>
                            <Label for="confirmPassword" className={styles.label}>
                                CONFIRM YOUR PASSWORD
                            </Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                required
                                minLength={6}
                                maxLength={20}
                                className={styles.input}
                            />
                        </FormGroup>
                        <Button type="submit" outline className={styles.formBtn}>
                            SUBMIT
                        </Button>
                    </Form>
                </Container>
                <Footer />
                <ToastComponent
                    color="bg-danger"
                    isOpen={toastIsOpen}
                    message={ToastMessage}
                />
            </main>
        </>
    );
};

export default Register;
