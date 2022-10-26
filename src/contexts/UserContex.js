import React, { Children, createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/Firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();

const auth =getAuth(app);

const UserContex = ({children}) => {

    //const user = {displayName: 'Aakash'}
    //const authInfo = {user: user}


    //const user = {displayName: 'Aakash'}
    const [user, setUser] = useState({displayName: 'Aakash'});

    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {user, createUser, signIn} 

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContex;