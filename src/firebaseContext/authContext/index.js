import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth () {
   return useContext(AuthContext);
}

export function AuthProvider({ children }) {
   const [currentUser, setCurrentUser] = useState("");
   const [userLoggedIn, setUserLoggedIn] = useState(false);
   // const [loading, setLoading] = useState(true);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, initializeUser);
      return unsubscribe;
   }, []);

   async function initializeUser(user) {
      if(user) {
         setCurrentUser({ ...user })
         setUserLoggedIn(true)
      } else {
         setCurrentUser(null)
         setUserLoggedIn(false)
      }
      // setLoading(false)
   }

   const value = {
      currentUser,
      userLoggedIn,
      setUserLoggedIn,
      // loading
   }

   return (
      <AuthContext.Provider value={value}>
         {/* { !loading && children } */}
         {children}
      </AuthContext.Provider>
   );
}