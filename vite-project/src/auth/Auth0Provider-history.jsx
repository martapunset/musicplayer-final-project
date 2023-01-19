
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';

export const Auth0ProviderWithHistory = ({ children }) => {
 // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
 // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate("/");
  };

  return (
    <Auth0Provider
      domain="bernersmusicapp.eu.auth0.com"
      clientId="qFfW5qSqtLX9AnlXSIM7RfJyCvKsemal"
      redirectUri={window.location.origin}
      audience="https://express.sample"
     // onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

