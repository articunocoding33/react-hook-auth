import React, { FC, createContext, useReducer } from 'react';
import { AuthProviderAction, AuthContextPropsType, AuthState } from '../types';
import { AuthProviderActionType } from '../constants';

const initialState: AuthState = {
  user: null,
  auth: null,
  refresh: null,
};

export const AuthContext = createContext<AuthContextPropsType>({
  ...initialState,
  dispatch: () => {
    throw new Error('Dispatch called before initialization');
  },
});

const reducer = (state: AuthState, action: AuthProviderAction): AuthState => {
  switch (action.type) {
    case AuthProviderActionType.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const AuthProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [authState, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
