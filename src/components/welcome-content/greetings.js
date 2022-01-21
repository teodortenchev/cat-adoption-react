import React from 'react';
import SimpleLink from '../../components/link/';
import Title from '../../components/title';
import styles from './greetings.module.css';
import WarningIcon from '@material-ui/icons/Warning';

const GuestGreeting = () => {
    return (
        <div className={styles.text}>
            <Title title="Looking to adopt a cat?" />

            <p>The Cat Adopt Foundation shelter has countless deserving cats in need of loving homes.
    <SimpleLink title=" Register" styleType="main-page" to="/register" /> and search our website to find the perfect companion for your family.
    Our cats can easily travel to Europe, the US and Canada. The process is very straightforward
    and we will help you every step of the way.</p>
            <p>You can always <SimpleLink title="browse the cats" styleType="main-page" to="/cats/all" /> that are up for adoption, but if you want to begin the process
        of adopting a kitty you must <SimpleLink title="sign up for an account" styleType="main-page" to="/register" />.
            </p>
        </div>
    )
}


const UserGreeting = ({ user }) => {
    return (
        <div className={styles.text}>
            <Title title="Looking to adopt a cat?" />

            <p>The Cat Adopt Foundation shelter has countless deserving cats in need of loving homes.</p>
            <h2>Available Actions</h2>
            <div className={styles.links}>
                <SimpleLink title="Find Your Purrfect Companion" styleType="main-page" to="/cats/all" />
                <SimpleLink title="Check or Update Your Profile" styleType="main-page" to={'/profile/'} />
            </div>
        </div>
    )
}

const AdminGreeting = ({ user, event, event2 }) => {
    return (
        <div className={styles.text}>
            <Title title={`Welcome back, ${user.displayName} (admin)`} />
            <p>It's a beautiful day, go find a home for the kitties!</p>
            {/* <p>There are [PLACEHOLDER] kitties up for adoption and [PLACEHOLDER] pending requests.</p> */}
            <h3>Available Actions</h3>
            <div className={styles.links}>
                <SimpleLink title="Add Cat For Adoption" styleType="main-page" to="/cats/add" />
                <SimpleLink title="Review Adoption Requests" styleType="main-page" to="/requests/" />
                <SimpleLink title="Check or Update Your Profile" styleType="main-page" to={'/profile/'} />
                <WarningIcon /><SimpleLink to="/cats/all" title="Reset APP" styleType="main-page-test" onClick={event} />
                <SimpleLink to="/cats/all" title="Simulate ALL Adopted" styleType="main-page-test" onClick={event2} />


            </div>
        </div>
    )
}

export { GuestGreeting, UserGreeting, AdminGreeting };