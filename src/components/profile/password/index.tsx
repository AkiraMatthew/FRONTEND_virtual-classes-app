import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../../../../styles/profile.module.scss';

const PasswordForm = function () {
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
        </>
    );
};

export default PasswordForm;
