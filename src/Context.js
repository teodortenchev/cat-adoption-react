import React from 'react';

const UserContext = React.createContext({
    isLoggedIn: false,
    isAdmin: false,
    appUser: null,
    logOut: () => {}
});

export default UserContext;