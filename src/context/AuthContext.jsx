import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import LoginService from "services/LoginService";
import { useSnackBarContext } from "./SnackBarProvider";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const history = useHistory();
  const snackBar = useSnackBarContext();
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
  // const [isAuth, setIsAuth] = useState(
  //   JSON.parse(localStorage.getItem("isAuth")) || true,
  // );
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("username")) || "",
  );

  const clearAuth = () => {
    localStorage.clear();
    setIsAuth(false);
  }

  const handlePersisterUsername = username => {
    localStorage.setItem("username", JSON.stringify(username));
    setUsername(username);
  };

  const handlePersisterAuth = (isAuth, token) => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
    localStorage.setItem("token", JSON.stringify(token));
    setIsAuth(isAuth);
  };

  const signIn = async ({ username, password }) => {
    try {
      const { token } = await LoginService.login({ username, password });
      handlePersisterUsername(username);
      handlePersisterAuth(true, token);
      history.push('/vehicles');
      return token;
    } catch (error) {
      localStorage.clear();
      snackBar.showErrorDialog(error.message);
      return error;
    }
  };

  const logout = async () => {
    clearAuth();
    history.push('/vehicles');
  };

  return (
    <AuthContext.Provider value={{ signIn, isAuth, username, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }
  return context;
}

export { AuthContext, useAuth };
