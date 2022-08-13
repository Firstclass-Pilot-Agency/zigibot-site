// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd5u2f8J3kg2pPxKlw5x-KiwFG4BidhpE",
    authDomain: "app-zigibot.firebaseapp.com",
    projectId: "app-zigibot",
    storageBucket: "app-zigibot.appspot.com",
    messagingSenderId: "447117899646",
    appId: "1:447117899646:web:846ffee8c0dcb7d6d0e52f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const ZigiBotAuth = getAuth(app);



const AuthContext = createContext({})

const useAuthContext = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
    // Auth states
    const [user, setUser] = useState(false)
    const [authLoading, setAuthLoading] = useState(false)
    const [authError, setAuthError] = useState("")
    const [isLogging, setIsLogging] = useState(false)
    const [userLink, setUserLink] = useState()
    const [openSign, setOpenSign] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [preload, setPreload] = useState(true)

    useEffect(() => {
        setAuthLoading(true)
        const unsubscribe = onAuthStateChanged(ZigiBotAuth, (result) => {
            if (result) {
                setUser(result)
                setUserLink(`${result.uid}`)
            }
                else {
                setUser(null)
            }
            // setAuthError("")
            // setAuthLoading(false)
        })
        return (unsubscribe)
    }, [])


       const signWithGoogle = () => {
        setAuthLoading(true)
           const provider = new GoogleAuthProvider();
        signInWithPopup(ZigiBotAuth, provider)
            .then((userResult) => {
                console.log(userResult);
            })
            .catch((error) => {
                setAuthError(error)
            })
            .finally(
                () => { setAuthLoading(false) }
            )
    }
    
    
    const openNav = () =>{
        setIsOpen(true)
    }
    const endPreload = () => {
        setPreload(false)
    }
    const closeNav = () =>{
        setIsOpen(false)
    }
    const logOutUser = () => {
        console.log("user out");
        signOut(ZigiBotAuth)
    }
    const openSignIn = () => {
        setIsLogging(true)
        setOpenSign(true)
    }
    const endSignUp = () => {
        setIsLogging(false)
        setOpenSign(false)
    }

    const authValue = {
        signWithGoogle,
        logOutUser,
        user,
        authError,
        authLoading,
        isLogging,
        openSignIn,
        endSignUp,
        userLink,
        openSign,
        closeNav,
        openNav,
        isOpen,
        preload,
        endPreload
    }
    return (<AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>)
}

export { AuthContextProvider, useAuthContext }