import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from "../../Firebase/Firebase.config";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const signWithForm = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginForm = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSign = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
             unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        signWithForm,
        loginForm,
        googleSign,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;