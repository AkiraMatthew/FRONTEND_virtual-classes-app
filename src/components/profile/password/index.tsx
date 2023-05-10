import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../../../../styles/profile.module.scss';
import { FormEvent, useEffect, useState } from 'react';
import profileService from '@/services/profileService';
import ToastComponent from '@/components/common/toast';

const PasswordForm = function () {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    //the password confirmation is made by the frontend, the backend does not verify the password
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [color, setColor] = useState('');
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        profileService.fetchCurrent().then((password) => {
            setCurrentPassword(password.currentPassword);
            setNewPassword(password.newPassword);
        });
    }, []);

    const handlePasswordUpdate = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (newPassword != confirmNewPassword) {
            setToastIsOpen(true);
            setErrorMessage('Password and password confirmation are different');
            setColor('bg-danger');
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);

            return;
        }

        if (currentPassword === newPassword) {
            setToastIsOpen(true);
            setErrorMessage("The new password can't be the same as the old one");
            setColor('bg-danger');
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);

            return;
        }

        const res = await profileService.passwordUpdate({
            currentPassword,
            newPassword,
        });

        //making the status verification to an success case
        if (res === 204) {
            setToastIsOpen(true);
            setErrorMessage('Password modification successful');
            setColor('bg-success');
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);

            //after the confirmation, we reset the inputs and give
            setCurrentPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        }

        //making the status verification to an error case
        if (res === 400) {
            setToastIsOpen(true);
            setErrorMessage('The current password is incorrect');
            setColor('bg-danger');
            setTimeout(() => {
                setToastIsOpen(false);
            }, 1000 * 3);
        }
    };

    return (
        <>
            <Form onSubmit={handlePasswordUpdate} className={styles.form}>
                <div className={styles.inputNormalDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="currentPassword">
                            CURRENT PASSWORD
                        </Label>
                        <Input
                            name="currentPassword"
                            type="password"
                            id="currentPassword"
                            placeholder="******"
                            required
                            minLength={6}
                            maxLength={20}
                            value={currentPassword}
                            onChange={(event) => {
                                setCurrentPassword(event.currentTarget.value);
                            }}
                            className={styles.input}
                        />
                    </FormGroup>
                </div>
                <div className={styles.inputFlexDiv}>
                    <FormGroup>
                        <Label className={styles.label} for="newPassword">
                            NEW PASSWORD
                        </Label>
                        <Input
                            name="newPassword"
                            type="password"
                            id="password"
                            placeholder="******"
                            minLength={6}
                            maxLength={20}
                            value={newPassword}
                            onChange={(event) => {
                                setNewPassword(event.currentTarget.value);
                            }}
                            className={styles.inputFlex}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className={styles.label} for="confirmNewPassword">
                            CONFIRM NEW PASSWORD
                        </Label>
                        <Input
                            name="confirmNewPassword"
                            type="password"
                            id="password"
                            placeholder="******"
                            minLength={6}
                            maxLength={20}
                            value={confirmNewPassword}
                            onChange={(event) => {
                                setConfirmNewPassword(event.currentTarget.value);
                            }}
                            className={styles.inputFlex}
                        />
                    </FormGroup>
                </div>
                <Button type="submit" className={`${styles.formBtn}`} outline>
                    Save Changes
                </Button>
            </Form>

            {/* We use the toast to display the alert of the success or failure of the operation */}
            <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage} />
        </>
    );
};

export default PasswordForm;
