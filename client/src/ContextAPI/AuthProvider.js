import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext({})
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('wonderboxtoken')
    const auth = getAuth(app);

    // console.log(user);
    const userRefetch = () => {
        setLoading(true)
        fetch(`http://localhost:5000/api/user/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("wonderboxtoken")}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
                setLoading(false)
            });
    }

    useEffect(() => {
        setLoading(true)
        userRefetch()
    }, [token]);


    // signup with google
    const signupWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // user Logout
    const logout = () => {
        setLoading(true)
        localStorage.removeItem('wonderboxtoken')
        setLoading(false)
        return signOut(auth)
    }



    const authInfo = {
        user,
        userRefetch,
        setUser,
        signupWithGoogle,
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;