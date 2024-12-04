import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const logOut = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
