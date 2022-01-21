import React, { useContext } from 'react';
import PageLayout from "../layouts/page-layout";
import styles from './index.module.css';
import WelcomeContent from '../../components/welcome-content';
import UserContext from '../../Context';
import firebase from '../../utils/firebase'

const HomePage = () => {

    const { isLoggedIn, appUser, isAdmin } = useContext(UserContext);

    return (
        <PageLayout>
            <div className={styles.container}>
                {/* //Property drilling ! I can use the context directly where it is needed and pass only the events here */}
                <WelcomeContent isAdmin={isAdmin} isLoggedIn={isLoggedIn} appUser={appUser} event={firebase.resetCats} event2={firebase.hideCats} />
            </div>
        </PageLayout>
    )
}

export default HomePage;
