import { createContext } from 'react';

export const AuthContext = createContext({
    defaultEmail: 'sinthusan@genit.sg',
    email: '',
    defaultPassword: 'P@ssw0rd!@#$',
    password: '',
});