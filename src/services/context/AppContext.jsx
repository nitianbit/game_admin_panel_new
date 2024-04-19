import { createContext, useEffect, useState } from 'react';
import { STORAGE_KEYS, getValue } from '../Storage';
import { toast } from 'react-toastify';

export const AppContext = createContext("");

export const AppProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const success = (message) => {
        return toast.success(message);
    };

    const error = (message) => {
        return toast.error(message)
    }

    useEffect(() => {
        const token = getValue(STORAGE_KEYS.TOKEN);
        if(token){
            setIsLoggedIn(true);
        }
    }, [])

    return (
        <AppContext.Provider
            value={{
                userData,
                setUserData,
                success,
                error,
                isLoggedIn, setIsLoggedIn
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
