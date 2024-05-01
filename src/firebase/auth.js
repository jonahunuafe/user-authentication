import { 
   createUserWithEmailAndPassword, 
   sendEmailVerification, 
   sendPasswordResetEmail, 
   signInWithEmailAndPassword,
   signOut, 
   updatePassword } from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async(email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
}

export const doLogInWithEmailAndPassword = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
}

export const doSignOut = () => {
   return signOut(auth);
}

export const doPasswordReset = (email) => {
   return sendPasswordResetEmail(auth, email)
}

export const doPasswordChange = (password) => {
   return updatePassword(auth.currentUser, password)
}

export const doSendEmailVerification = () => {
   return sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
   });
} 