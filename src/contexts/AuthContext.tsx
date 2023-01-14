import React, { FC, createContext, useContext } from 'react';

import { AuthContextPropsType } from '../types';

const AuthContext = createContext<AuthContextPropsType>({});

export const AuthProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
