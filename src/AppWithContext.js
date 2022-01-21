import React, { useState, useEffect } from 'react';
import UserContext from './Context';
import firebase from './utils/firebase';
import admins from './utils/admins';

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [appUser, setUser] = useState(null);
  const [isAdmin, setAdmin] = useState(false);

  const login = (user) => {
    setIsLoggedIn(true);
    setUser(user);
    if (admins.includes(user.email)) {
      setAdmin(true);
    }
  }

  const logout = () => {
    setIsLoggedIn(false);
    setUser('');
    setAdmin(false);
  }

  useEffect(() => {
    console.log("I am called from AppWithContext")
    firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        login(user);
      } else {
        logout();
      }
    })
  })

  return (
    <UserContext.Provider value={{ isLoggedIn, isAdmin, appUser, logout: logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default App;
