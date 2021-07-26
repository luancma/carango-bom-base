import React, { createContext, useContext, useState } from "react";
import LoginService from "services/LoginService";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  // isAuth default to false
  // const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || true,
  );
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("username")) || "",
  );

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
      return handlePersisterAuth(true, token);
    } catch (error) {
      localStorage.clear();
      return error;
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, isAuth, username }}>
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
