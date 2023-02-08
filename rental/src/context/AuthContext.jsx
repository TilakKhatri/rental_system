import { createContext, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const login = (input) => {
        axios.post('http://localhost:8080/api/auth/login', input).then((response) =>
            console.log("successfully logged in.")).catch((error) => console.log(error));
    }

    const logout = () => {
        axios.post('http://localhost:8080/api/auth/logout').then((response) =>
            console.log("you are logged out.")).catch((error) => console.log(error));
    }
    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/logout').then((response) => {
            if (response.data.loggedIn == true) {
                setCurrentUser(response.data.user[0]);
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

