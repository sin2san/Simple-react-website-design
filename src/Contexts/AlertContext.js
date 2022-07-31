import { createContext } from 'react';

export const AlertContext = createContext({
    isActive: false,
    variant: '',
    message: '',
});