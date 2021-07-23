import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {

  // isAuth default to false
  // const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || true);
  const [username, setUsername] = useState(JSON.parse(localStorage.getItem("username")) || "");

  const handlePersisterUsername = username => {
    localStorage.setItem("username", JSON.stringify(username));
    setUsername(username)
  }

  const handlePersisterAuth = (isAuth, token) => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
    localStorage.setItem("token", JSON.stringify(token));
    setIsAuth(isAuth)
  }


  const signIn = ({ username, password }) => {
    const mockResponse = {
      user: {
        id: 1,
        username: "username",
        token: "TOKEN"
      }
    }

    if (mockResponse.user.id) {
      handlePersisterUsername(mockResponse.user.name)
      return handlePersisterAuth(true, mockResponse.user.token)
    }

    return localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuth, username }}>
      {children}
    </AuthContext.Provider>
  )

}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.")
  }
  return context;
}

export { AuthContext, useAuth };