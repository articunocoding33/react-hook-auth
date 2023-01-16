import { AuthProviderActionType } from '../constants';

export type AuthState = {
  user: {
    name: any | null;
    id: string | number;
  } | null;
  auth: {
    token: string;
    type: string;
    expiresAt: Date;
  } | null;
  refresh: {
    token: string;
    expiresAt: Date;
  } | null;
};

export type AuthStateUserObject = {
  [x: string]: any;
}

export type AuthProviderAction = {
  type: AuthProviderActionType;
  payload: any;
};

export type AuthContextPropsType = AuthState & {
  dispatch: React.Dispatch<AuthProviderAction>;
};
export interface AuthProviderProps {
  authType: 'localstorage'
  authName: string,
  // refresh?: createRefreshParamInterface
  // cookieDomain?: string
  // cookieSecure?: boolean
  children: React.ReactNode
}

