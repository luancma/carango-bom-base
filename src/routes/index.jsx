import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authRoutes } from "routes/auth.routes";
import ListVehicle from '../pages/ListVehicle';
import Login from 'pages/Login';
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
      <Route path="/login" exact component={Login} />
      <Route path="/vehicle" exact component={ListVehicle} />
      <Redirect to="/vehicle" />
    </Switch>
  )
}

export default Routes;