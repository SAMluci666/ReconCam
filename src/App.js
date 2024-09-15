import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './Home';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={process.env.REACT_APP_AUTH0_REDIRECT_URI || window.location.origin}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<PrivateRoute isAuthenticated={true}>
              <Profile />
            </PrivateRoute>}
          />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;
