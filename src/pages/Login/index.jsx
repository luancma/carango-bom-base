import React from "react";
import LoginForm from "./LoginForm";
import { useAuth } from "../../context/AuthContext";

import { Redirect } from "react-router-dom";
function Login() {

  const { signIn, isAuth } = useAuth();

  const onSubmit = async user => {
    try {
      signIn({
        username: user.username,
        password: user.password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>{isAuth ? <Redirect to="/" /> : <LoginForm onSubmit={onSubmit} />}</>
  );
}

export default Login;
