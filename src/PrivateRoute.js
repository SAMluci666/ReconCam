import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Use Navigate instead of Redirect

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? children : <Navigate to="/login" /> // Replaced Redirect with Navigate
      }
    />
  );
};

export default PrivateRoute;
