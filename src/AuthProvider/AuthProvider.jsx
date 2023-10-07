import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //create user with google
    const provider = new GoogleAuthProvider();
    const createUserGoogle = () => {
         return signInWithPopup(auth, provider);
    }

    //create user for register route
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password);
    }

    //signIn user for login route
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout user 
    const logOut = () => {
        return signOut(auth);
    }

    //observer
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo ={
        user,
        createUser,
        signIn,
        createUserGoogle,
        logOut
    }

    
    return (
        <AuthContext.Provider value = {authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;