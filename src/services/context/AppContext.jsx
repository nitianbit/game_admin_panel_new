import { createContext, useEffect, useState } from 'react';
import { STORAGE_KEYS, getValue } from '../Storage';

export const AppContext = createContext("");

export const AppProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = getValue(STORAGE_KEYS.TOKEN);
        // setIsLoggedIn(true);
    }, [])

    return (
        <AppContext.Provider
            value={{
                userData,
                setUserData,
                isLoggedIn, setIsLoggedIn
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
