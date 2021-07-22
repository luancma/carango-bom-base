import React from "react";
import LoginForm from "../components/LoginForm";
import LoginService from "../services/LoginService";

function Login() {
  const onSubmit = user => {
    try {
      LoginService.login(user);
    } catch (error) {
      console.error(error);
    }
  };

  return <LoginForm onSubmit={onSubmit} />;
}

export default Login;
