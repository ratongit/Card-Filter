import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser =(email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const singIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logOut = () =>{
       return signOut(auth)
    }
    const googleSingIn = () =>{
        return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,currentUser =>{
            console.log('auth state change',currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unsubcribe()
        }
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        singIn,
        logOut,
        googleSingIn,
    }
    return (
        
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

    );
};

export default AuthProviders;