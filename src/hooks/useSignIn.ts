import { useAuthContext } from '.';
import { AuthProviderActionType } from '../constants';
import { AuthState } from '../types';

interface signInFunctionParams {
  token: string;
  tokenType: string | 'Bearer';
  expiresIn: number;
  user?: AuthState;
  refreshToken?: string;
  refreshTokenExpireIn?: number;
}

const useSignIn = () => {
  const { dispatch } = useAuthContext();

  return (signInConfig: signInFunctionParams) => {
    const {
      token,
      tokenType,
      user,
      expiresIn,
      refreshToken,
      refreshTokenExpireIn,
    } = signInConfig;

    const expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000);

    // Using the power of refresh token
    if (!!refreshToken && !!refreshTokenExpireIn) {
      // refresh token params are provided
      // sign in with refresh token
      const refreshTokenExpireAt = new Date(
        new Date().getTime() + refreshTokenExpireIn * 60 * 1000
      );

      dispatch({
        type: AuthProviderActionType.SIGN_IN,
        payload: {
          auth: {
            token: token,
            type: tokenType,
            expiresAt: expTime,
          },
          user: user ? user : null,
          refresh: {
            token: refreshToken,
            expiresAt: refreshTokenExpireAt,
          },
        },
      });

      return true;
    } else {
      // refresh token params are not provided
      // throw an error
      throw new Error(
        'Make sure you given "refreshToken" and  ' +
          '"refreshTokenExpireIn" parameter'
      );
    }
  };
};

export default useSignIn;
