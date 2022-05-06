import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store } from 'src/store/store'
import { BrowserRouter, Navigate } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

const domain:any = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId:any = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience:any = process.env.REACT_APP_AUDIENCE;

const onRedirectCallback = (appState:any) => {
  console.log("ASDFsdflkj.")
  Navigate(appState?.returnTo || window.location.pathname);
};

ReactDOM.render(
  <React.StrictMode>
   <Auth0Provider domain={domain} clientId={clientId} redirectUri={`${window.location.origin}/review`} audience={audience}>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
    </Auth0Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);