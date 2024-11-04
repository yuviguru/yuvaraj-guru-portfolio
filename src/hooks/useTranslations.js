import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const useTranslations = () => {
    const { language } = useContext(LanguageContext);
    const [translations, setTranslations] = useState(null);

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const translationsModule = await import(`../lang/base_${language}.js`);
                console.log(translationsModule.default);
                setTranslations(translationsModule.default);
                console.log(translations);
            } catch (error) {
                console.error('Error loading translations', error);
            }
        };

        loadTranslations();
    }, [language]);

    return translations;
};
