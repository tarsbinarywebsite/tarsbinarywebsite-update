import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

export const FBaseAuthContext = createContext();
const auth = getAuth(app);

const FirebaseAuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');
  const [loading, setLoading] = useState(true);

  //  Register User with email and password
  const methodCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In Method with email and password
  const methodSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Password reset Method

  const methodSendPasswordResetEmail = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Sign Out Method
  const methodSignOut = () => {
    setLoading(true);
    return auth.signOut(auth);
  };

  //  Update Profile Method
  const methodUpdateProfile = (name, imgUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgUrl
    });
  };
  const authMethods = {
    currentUser,
    loading,
    setLoading,
    methodCreateUser,
    methodSignIn,
    methodSendPasswordResetEmail,
    methodUpdateProfile,
    methodSignOut
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      } else {
        setCurrentUser('');
        setLoading(false);
      }
    });
    return () => {
      // cleanup
      unsubscribe();
    };
  }, []);

  return (
    <>
      <FBaseAuthContext.Provider value={authMethods}>
        {children}
      </FBaseAuthContext.Provider>
    </>
  );
};

export default FirebaseAuthContext;
