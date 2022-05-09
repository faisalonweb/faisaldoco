import React from 'react';
import { Navigate  } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children}:any) => {
  const domain:any = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId:any = process.env.REACT_APP_AUTH0_CLIENT_ID;

//   let navigate = useNavigate();

  const onRedirectCallback = (appState:any) => {
    Navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}/review`} 
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;