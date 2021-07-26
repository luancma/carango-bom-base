import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authRoutes } from "routes/auth.routes";
import Vehicle from "pages/Vehicle"
const Routes = () => {
  const { isAuth } = useAuth();
  return (
    <Switch>
      {
        isAuth && (
          authRoutes.map((route, index) => (
            <Route key={index} exact path={route.path} component={route.component} />
          ))
        )
      }
      <Route path="/vehicle" exact component={Vehicle} />
      <Redirect to="/vehicle" />
    </Switch>
  )
}

export default Routes;