import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default language is English

    // Optionally, you can add logic here to retrieve a saved language preference from local storage or a cookie
    useEffect(() => {
        const savedLanguage = localStorage.getItem('appLanguage');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    // Change the language and save it in local storage
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem('appLanguage', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
