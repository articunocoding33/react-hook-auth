
import * as React from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import {AuthContext} from './contexts/AuthContext';
// import {doSignOut} from './utils/reducers';

interface RequireAuthProps {
  children: JSX.Element,
  loginPath: string
}

const RequireAuth: React.FunctionComponent<RequireAuthProps> =
  ({children, loginPath}) => {
    const context = React.useContext(AuthContext);
    if (context === null) {
      throw new
      Error('Auth Provider is missing. ' +
      'Please add the AuthProvider before Router');
    }

    const isAuth = () => {
      if (context.user.auth &&
      (new Date(context.user.auth.expiresAt) > new Date())) {
        return true;
      } else {
        // context.dispatch(doSignOut());
        return false;
      }
    };
    const location = useLocation();

    if (!isAuth()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
      return <Navigate to={loginPath} state={{from: location}} replace />;
    }

    return children;
  };

export default RequireAuth;
