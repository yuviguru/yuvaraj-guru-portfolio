import { createContext, useContext } from 'react';

// False while the preloader covers the page, so intro animations can wait for it
export const SiteReadyContext = createContext(true);

export const useSiteReady = () => useContext(SiteReadyContext);
