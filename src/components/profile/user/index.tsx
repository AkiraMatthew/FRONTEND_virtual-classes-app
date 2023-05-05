/* eslint-disable @next/next/no-img-element */
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../../../../styles/profile.module.scss';

const UserForm = function () {
    return (
        <>
            <Form className={styles.form}>
                {/* First paragraph is the person name abreviation */}
                <div className={styles.formName}>
                    <p className={styles.nameAbbreviation}>NT</p>
                    <p className={styles.userName}>NAME TEST</p>
                </div>
                {/* Here we put the information of the user membership time */}
                <div className={styles.memberTime}>
                    <img
                        src="/imgs/profile/iconUserAccount.svg"
                        alt="iconProfile"
                        className={styles.memberTimeImg}
                    />
                    <p className={styles.memberTimeText}>
                        Member since <br /> 20st April 2020
                    </p>
                </div>

                <hr />

                <div>
                    <FormGroup>
                        <Label for="firstName" className={styles.label}>NAME</Label>
                        <Input
                            name="firstName"
                            type="text"
                            id="firstName"
                            placeholder="What is your first name"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={'Name'}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName" className={styles.label}>LAST NAME</Label>
                        <Input
                            name="lastName"
                            type="text"
                            id="lastName"
                            placeholder="What is your last name"
                            required
                            maxLength={20}
                            className={styles.inputFlex}
                            value={'Test'}
                        />
                    </FormGroup>
                </div>
                <div>
                    <FormGroup>
                        <Label for="number" className={styles.label}>PHONE NUMBER</Label>
                        <Input
                            name="phone"
                            type="text"
                            id="phone"
                            placeholder="+xx (xx) xxxx-xxxx"
                            required
                            className={styles.input}
                            value={'+55 21 98765-4321'}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" className={styles.label}>E-MAIL</Label>
                        <Input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="dunno@email.com"
                            required
                            className={styles.input}
                            value={'dunno@email.com'}
                        />
                    </FormGroup>

                    <Button className={styles.formBtn} outline type='submit'></Button>
                </div>
            </Form>
        </>
    );
};

export default UserForm;
