import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../../../../styles/profile.module.scss';
import { useEffect, useState } from 'react';
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
        })
    }, [])
    
    return (
        <>
            <Form className={styles.form}>
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
                            maxLength={12}
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
                            maxLength={12}
                            className={styles.inputFlex}
                        />
                    </FormGroup>

                </div>
                    <Button className={`${styles.formBtn}`} outline>Save Changes</Button>
            </Form>

            {/* We use the toast to display the alert of the success or failure of the operation */}
            <ToastComponent color={color} isOpen={toastIsOpen} message={errorMessage} />
        </>
    );
};

export default PasswordForm;
