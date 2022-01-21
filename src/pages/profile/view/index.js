import React, { useContext } from 'react';
import PageLayout from '../../layouts/page-layout'
import firebase from '../../../utils/firebase'
import styles from './index.module.css';
import UserContext from '../../../Context';
import Button from '@material-ui/core/Button';
import defaultPicture from '../../../images/profilepic.jpg'

const ProfilePage = () => {
    const { appUser } = useContext(UserContext);

    const picture = appUser.photoURL;

    return (
        <PageLayout>
            <div className={styles.container}>

                <img className={styles.picture} src={picture || defaultPicture} alt={`${appUser.displayName}'s avatar`} />

                <div>

                    <div className={styles.profileInfo}>
                        <div><span className={styles.fieldName}>Name: </span>
                            <span className={styles.fieldValue}>{appUser.displayName}</span></div>
                        <div><span className={styles.fieldName}>Email: </span>
                            <span className={styles.fieldValue}>{appUser.email}</span></div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button variant="contained" color="default" size="small" className={styles.button} href={`/profile/edit/`}>Update Profile</Button>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button variant="contained" color="secondary" size="small" className={styles.button} onClick={(event) => firebase.logout()}>Sign Out</Button>
                    </div>
                </div>

            </div>
        </PageLayout>
    )
};
export default ProfilePage;
