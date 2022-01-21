import React, { useState } from 'react';
import CustomLink from '../../components/link';
import { FormControl}  from '../../components/form-control'
import Title from '../../components/title'
import PageLayout from "../layouts/page-layout";
import Button from '../../components/button/submit-button';
import FormWrapper from '../../components/form-wrapper';
import firebase from '../../utils/firebase';
import styles from './index.module.css';

const RegisterPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const [displayName, setDisplayName] = useState('');
    const [photoUrl, setphotoUrl] = useState('');

    const [error, setError] = useState(null);


    async function register() {

        if (password !== rePassword) {
            setError("Password must match!");
        }
        else {
            try {
                await firebase.register(displayName, email, password, photoUrl);
                props.history.push('/cats/all')
            } catch (error) {
                setError(error.message);
            }
        }
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
        else if (name === 'rePassword') {
            setRePassword(value);
        }
        else if (name === 'displayName') {
            setDisplayName(value)
        }
        else if (name === 'photoUrl') {
            setphotoUrl(value)
        }
    }

    return (
        <PageLayout>
            <FormWrapper>
                <Title title="Sign Up" />
                <div className={styles.error}>{error}</div>
                <FormControl id="displayName" name="displayName" label="First and Last Name (e.g. Thomas Joplin)" value={displayName} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl id="userEmail" name="userEmail" label="Email Address" value={email} type="email"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl id="userPassword" name="userPassword" label="Enter password" value={password} type="password"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl id="rePassword" name="rePassword" label="Confirm password" value={rePassword} type="password"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl id="photoUrl" name="photoUrl" label="Picture url" value={photoUrl} type="text"
                    onChange={(event) => onChangeHandler(event)} />

                <Button title="Register"
                    onClick={register} />

                <CustomLink title="Already registered? Log in here" to="/login" styleType="form-simple" />

            </FormWrapper>
        </PageLayout>
    )
}

export default RegisterPage;