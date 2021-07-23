import React from "react";

import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useSnackBarContext } from "../../context/SnackBarProvider";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackBar() {
  const {
    state: { message, type, open },
    closeErrorDialog,
  } = useSnackBarContext();

  return (
    <div>
      {type && (
        <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={1000}
          onClose={() => closeErrorDialog()}
        >
          <Alert severity={type}>{message}</Alert>
        </Snackbar>
      )}
    </div>
  );
}
