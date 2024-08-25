// src/components/PrivateRoute.tsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../services/KeycloakService';

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
