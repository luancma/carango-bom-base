import React, { createContext, useContext } from "react";
import useSnackBar from "../hooks/useSnackBar";

const SnackBarContext = createContext({});

export function SnackBarProvider({ children }) {
  const INTIAL_STATE = {
    open: false,
    type: "info",
    message: "",
  };

  const { state, showSuccessDialog, showErrorDialog, closeErrorDialog } =
    useSnackBar({
      INTIAL_STATE,
    });

  return (
    <SnackBarContext.Provider
      value={{
        state,
        showSuccessDialog,
        showErrorDialog,
        closeErrorDialog,
      }}
    >
      {children}
    </SnackBarContext.Provider>
  );
}

function useSnackBarContext() {
  const context = useContext(SnackBarContext);

  if (!context) {
    throw new Error(
      "useSnackBarContext must be used within an SnackBarProvider.",
    );
  }
  return context;
}

export { SnackBarContext, useSnackBarContext };
