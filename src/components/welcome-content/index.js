import React from 'react';
import { UserGreeting, AdminGreeting, GuestGreeting } from './greetings';


const WelcomeContent = ({ isLoggedIn, isAdmin, appUser, event, event2 }) => {

    if (isLoggedIn && isAdmin) {
        return <AdminGreeting user={appUser} event={event} event2={event2} />
    }
    else if (isLoggedIn) {
        return <UserGreeting user={appUser} />

    }

    return <GuestGreeting />
}
export default WelcomeContent;