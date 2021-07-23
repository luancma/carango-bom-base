import { useReducer } from "react";

const SUCCESS = "success";
const ERROR = "error";
const CLOSE = "close";


function reducer(state, action) {
  switch (action.type) {
    case SUCCESS:
      return { open: true, type: SUCCESS, message: action.payload.message };
    case ERROR:
      return { open: true, type: ERROR, message: action.payload.message };
    case CLOSE:
      return { open: false, type: "", message: "" };
    default:
      throw new Error();
  }
}

function useSnackBar({ INTIAL_STATE }) {
  const [state, dispatch] = useReducer(reducer, INTIAL_STATE);
  
  const showSuccessDialog = (message = "Success") => dispatch({ type: SUCCESS, payload: { message } });
  const showErrorDialog = (message = "Error") => dispatch({ type: ERROR, payload: { message } });
  const closeErrorDialog = () => dispatch({ type: CLOSE });

  return {
    state,
    showSuccessDialog,
    showErrorDialog,
    closeErrorDialog
  };
}

export default useSnackBar;
