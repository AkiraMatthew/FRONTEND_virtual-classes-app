/* eslint-disable @next/next/no-img-element */ // Disable specific eslint rule for this file
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'; // Importing necessary components from reactstrap library
import styles from '../../../../styles/profile.module.scss'; // Importing module styles
import { FormEvent, useEffect, useState } from 'react'; // Importing necessary hooks from React
import profileService from '@/services/profileService'; // Importing profile service
import ToastComponent from '@/components/common/toast'; // Importing toast component

const UserForm = function () {
    // Declaring state variables using useState hook
    const [color, setColor] = useState('');
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [created_at, setCreated_at] = useState('');
    const date = new Date(created_at); //formating to bring the date in the usual date format, but here the month still  comming as number
    const month = date.toLocaleDateString('default', { month: 'long' });

    // Using useEffect hook to fetch data from backend and update state variables
    useEffect(() => {
        profileService.fetchCurrent().then((user) => {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setPhone(user.phone);
            setEmail(user.email);
            setCreated_at(user.createdAt);
        });
    }, []);

    // Function to handle user update on form submit
    const handleUserUpdate = async function (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Call profile service function to update user data
        const res = await profileService.userUpdate({
            firstName,
            lastName,
            phone,
            email,
            created_at,
        });

        // If update is successful, show success message and update state variables
        if (res === 200) {
            setToastIsOpen(true);
            setErrorMessage('Data successful updated!');
            setColor('bg-success');
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
        } else {
            // If update fails, show error message and update state variables
            setToastIsOpen(true);
            setErrorMessage("You can't change to an existent email");
            setColor('bg-danger');
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
        }
    };

    // Return form component with input fields and submit button

    return (
        <>
            <Form onSubmit={handleUserUpdate} className={styles.form}>
                {/* First paragraph is the person name abreviation */}
                <div className={styles.formName}>
                    <p className={styles.nameAbbreviation}>
                        {firstName.slice(0, 1)}
                        {lastName.slice(0, 1)}
                    </p>
                    <p className={styles.userName}>{`${firstName} ${lastName}`}</p>
                </div>
                {/* Here we put the information of the user membership time */}
                <div className={styles.memberTime}>
                    <img
                        src="/imgs/profile/iconUserAccount.svg"
                        alt="iconProfile"
                        className={styles.memberTimeImg}
                    />
                    <p className={styles.memberTimeText}>
                        Member since <br /> {`${date.getDate()}st ${month} of ${date.getFullYear()}`}
                    </p>
                </div>

                <hr />

                <div className={styles.inputFlexDiv}>
                    <FormGroup>
                        <Label for="firstName" className={styles.label}>
                            NAME
                        </Label>
                        <Input
                            name="firstName"
                            type="text"
                            id="firstName"
                            placeholder="first name"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={firstName}
                            onChange={(event) => {
                                setFirstName(event.target.value);
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName" className={styles.label}>
                            LAST NAME
                        </Label>
                        <Input
                            name="lastName"
                            type="text"
                            id="lastName"
                            placeholder="What is your last name"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={lastName}
                            onChange={(event) => {
                                setLastName(event.target.value);
                            }}
                        />
                    </FormGroup>
                </div>
                <div className={styles.inputNormalDiv}>
                    <FormGroup>
                        <Label for="number" className={styles.label}>
                            PHONE NUMBER
                        </Label>
                        <Input
                            name="phone"
                            type="text"
                            id="phone"
                            placeholder="+xx (xx) xxxx-xxxx"
                            required
                            className={styles.input}
                            value={phone}
                            onChange={(event) => {
                                setPhone(event.target.value);
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" className={styles.label}>
                            E-MAIL
                        </Label>
                        <Input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="dunno@email.com"
                            required
                            className={styles.input}
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </FormGroup>

                    <Button className={styles.formBtn} outline type="submit">
                        Save Changes
                    </Button>
                </div>
            </Form>
            <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage} />
        </>
    );
};

export default UserForm;
