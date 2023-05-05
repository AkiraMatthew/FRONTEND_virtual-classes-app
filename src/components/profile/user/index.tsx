/* eslint-disable @next/next/no-img-element */
import { Form } from 'reactstrap';
import styles from '../../../../styles/profile.module.scss';

const UserForm = function () {
    return (
        <>
            <Form>
                {/* First paragraph is the person name abreviation */}
                <div className={styles.formName}>
                    <p className={styles.nameAbbreviation}>NT</p>
                    <p className={styles.userName}>NAME TEST</p>
                </div>
                {/* Here we put the information of the user membership time */}
                <div className={styles.formName}>
                    <img
                        src="/imgs/profile/iconUserAccount.svg"
                        alt="iconProfile"
                        className={styles.memberTimeImg}
                    />
                    <p className={styles.memberTimeText}>
                        Member since <br /> 20st April 2020
                    </p>
                </div>
            </Form>
        </>
    );
};

export default UserForm;
