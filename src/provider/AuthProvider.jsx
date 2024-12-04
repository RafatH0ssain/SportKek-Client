import { createContext, useEffect } from "react";
import { useState } from "react";
import app from '../firebaseConfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    const authInfo = {
        user,
        setUser,
        createUser,
        logOut,
        userLogin,
        setLoading,
        loading,
        updateUserProfile
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>);
};

export default AuthProvider;