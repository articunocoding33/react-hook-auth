import { AuthProviderActionType } from '../constants';

export type AuthState = {
  user: null;
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

export type AuthProviderAction = {
  type: AuthProviderActionType;
  payload: any;
};

export type AuthContextPropsType = AuthState & {
  dispatch: React.Dispatch<AuthProviderAction>;
};
