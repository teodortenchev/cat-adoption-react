import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../layouts/page-layout'
import firebase from '../../../utils/firebase'
import styles from './index.module.css';
import UserContext from '../../../Context';
import Button from '@material-ui/core/Button';
import defaultPicture from '../../../images/profilepic.jpg'

const ProfileEditPage = (props) => {
    const { appUser } = useContext(UserContext);
    const history = useHistory();

    const [displayName, setDisplayName] = useState(appUser.displayName);
    const [email, setEmail] = useState(appUser.email);
    const [photoUrl, setPhotoUrl] = useState(appUser.photoURL);
    const [error, setError] = useState('');

    async function edit() {

        if (displayName === '') {
            setError('Your name can\'t be empty');
            return;
        }
        if (email === '') {
            setError('Email cannot be empty');
            return;
        }

        try {
            await firebase.editUser(displayName, email, photoUrl);
            history.push(`/profile`)

        } catch (error) {
            setError(error.message);
        }

    }

    return (
        <PageLayout>
            <div className={styles.container}>

                <img className={styles.picture} src={photoUrl || defaultPicture} alt={`${appUser.displayName}'s avatar`} />

                <div>

                    <div className={styles.profileInfo}>
                        <span className={styles.error}>{error}</span>
                        <div><span className={styles.fieldName}>Name: </span>
                            <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                        </div>
                        <div><span className={styles.fieldName}>Email: </span>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                        </div>
                        <div><span className={styles.fieldName}>Photo: </span>
                            <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        <Button variant="contained" color="primary" size="small" className={styles.button} onClick={edit}>Submit</Button>
                    </div>
                </div>

            </div>
        </PageLayout>
    )
};
export default ProfileEditPage;
