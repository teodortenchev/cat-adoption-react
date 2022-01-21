import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import LogInPage from './pages/login';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profile/view';
import ProfileEditPage from './pages/profile/edit';
import CatCreatePage from './pages/cats/create';
import AllCatsPage from './pages/cats/all';
import CatDetails from './pages/cats/details';
import AdoptionsPage from './pages/myadoptions';
import CatEditPage from './pages/cats/edit';
import { CircularProgress } from '@material-ui/core';
import styles from './navigation.module.css';
import firebase from './utils/firebase';
import UserContext from './Context';
import ErrorPage from './pages/error';
import PendingAdoptionsPage from './pages/requests';

const Navigation = (props) => {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false);

    useEffect(() => {
        firebase.isInitialized().then(value => {
            setFirebaseInitialized(value)
        })
    })

    const { isLoggedIn, isAdmin } = useContext(UserContext);

    return firebaseInitialized !== false ? (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />

                <Route path="/login">
                    {!isLoggedIn ? <LogInPage /> : <Redirect to="/" />}
                </Route>

                <Route path="/register">
                    {!isLoggedIn ? <RegisterPage /> : <Redirect to="/" />}
                </Route>

                <Route path="/profile" exact>
                    {isLoggedIn ? <ProfilePage /> : <Redirect to="/" />}
                </Route>

                <Route path="/profile/edit">
                    {isLoggedIn ? <ProfileEditPage /> : <Redirect to="/" />}
                </Route>

                <Route path="/adoptions/">
                    {isLoggedIn ? <AdoptionsPage /> : <Redirect to="/" />}
                </Route>

                <Route path="/cats/edit/:catId">
                    {isAdmin ? <CatEditPage /> : <Redirect to="/" />}
                </Route>

                <Route path="/cats/add">
                    {isAdmin ? <CatCreatePage /> : <Redirect to="/" />}
                </Route>

                <Route path="/cats/all" component={AllCatsPage} />
                <Route path="/cats/:catId" component={CatDetails} />

                <Route path="/requests">
                    {isAdmin ? <PendingAdoptionsPage /> : <Redirect to="/" />}
                </Route>

                <Route component={ErrorPage} />


            </Switch>
        </BrowserRouter>
    ) : <div className={styles.loader}><CircularProgress size={100} /></div>
}

export default Navigation;