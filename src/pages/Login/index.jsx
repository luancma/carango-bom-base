import React from "react";
import LoginForm from "./LoginForm";
import { useAuth } from "../../context/AuthContext";

import { Redirect, useHistory } from "react-router-dom";
function Login() {

  const { signIn, isAuth } = useAuth();
  const history = useHistory();

  const onSubmit = async user => {
    try {
      const resp = signIn({
        username: user.username,
        password: user.password,
      });
      if (resp.token) {
        return history.push('/vehicles');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>{isAuth ? <Redirect to="/" /> : <LoginForm onSubmit={onSubmit} />}</>
  );
}

export default Login;
