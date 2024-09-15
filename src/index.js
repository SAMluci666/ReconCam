import React from 'react';
import ReactDOM from 'react-dom/client'; // updated import for React 18
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// Get Auth0 credentials from environment variables
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root')); // updated to use createRoot
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
