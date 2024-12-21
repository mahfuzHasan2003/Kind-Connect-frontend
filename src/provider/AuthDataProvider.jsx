import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthDataProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");

   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d@$!%*?&]{6,}$/;
   const urlRegex =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;
   const isValidEmail = (email) => emailRegex.test(email);
   const isValidPassword = (password) => passwordRegex.test(password);
   const isValidPhotoURL = (url) => urlRegex.test(url);

   const registerWithEmail = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const updateUserProfile = (obj) => {
      return updateProfile(auth.currentUser, obj);
   };
   const logOut = () => signOut(auth);
   const logInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };
   const logInWithEmail = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log(currentUser);
         setLoading(false);
      });
      return () => unSubscribe();
   }, []);

   const authData = {
      user,
      loading,
      logInWithGoogle,
      logOut,
      registerWithEmail,
      logInWithEmail,
      updateUserProfile,
      setError,
      error,
      isValidEmail,
      isValidPassword,
      isValidPhotoURL,
   };
   return (
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
   );
};

export default AuthDataProvider;
