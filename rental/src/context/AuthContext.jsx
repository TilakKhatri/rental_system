import { createContext, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("admin")) || null);

    const login = (input) => {
        axios.post('http://localhost:8000/api/auth/login', input).then((response) => {
            console.log('logged in.')
            setCurrentUser(response.data)
        }
        ).catch((error) => console.log('wrong email or password.'));
    }

    const logout = () => {
        // axios.post('http://localhost:8000/api/auth/logout').then((response) => {
        //     setCurrentUser(null);
        // }).catch((error) => console.log(error));
        setCurrentUser(null);
    }
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/auth/login').then((response) => {
    //         if (response.data.loggedIn == true) {
    //             setCurrentUser(response.data.user[0]);
    //         }
    //     })
    // }, [])
    useEffect(() => {
        localStorage.setItem("admin", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

