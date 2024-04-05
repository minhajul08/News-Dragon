import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext (null)

const auth = getAuth(app);



const AuthProviders = ({children}) => {
    const [user,setUser] = useState (null);
    const [loading,setLoading] = useState (true);
    
const createUser = (email,password) => {
    setLoading (true);
   return createUserWithEmailAndPassword (auth,email,password)
   
}

const login = (email,password) => {
    setLoading (true);
    return signInWithEmailAndPassword (auth,email,password)
}

const logOut = () => {
    setLoading (true)
    return signOut (auth);
}
 
 
   useEffect (() => {
   const unSubscribe =  onAuthStateChanged (auth,currentUser => {
        console.log ('user in the auth state change',currentUser)
        setUser (currentUser)
        setLoading (false);
    });
    return () => {
        unSubscribe ();
    }
   } ,[])
 

     const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        login
     }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;