import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';

import globalAuth from '../firebase/firebase.config.js';
import axios from 'axios';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const googleAuthProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUserByEmailPassword = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const loginByEmailPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const signInGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(globalAuth, googleAuthProvider);
  };

  const showingProfile = (userName, photoUrl) => {
    setIsLoading(true);

    return updateProfile(globalAuth.currentUser, {
      displayName: userName,
      photoURL: photoUrl,
    });
  };

  const logOut = () => {
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      const userEmail = currentUser?.email || user?.email;
      const loggedInUser = { email: userEmail };

      if (currentUser) {
        axios
          .post(
            'https://assignment-11-server-brown.vercel.app/jwt',
            loggedInUser,
            {
              withCredentials: true,
            }
          )
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      } else {
        axios
          .post(
            'https://assignment-11-server-brown.vercel.app/jwtLogout',
            loggedInUser,
            {
              withCredentials: true,
            }
          )
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }
    });

    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const info = {
    createUserByEmailPassword,
    loginByEmailPassword,
    logOut,
    signInGoogle,
    showingProfile,
    isLoading,
    user,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
