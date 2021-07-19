import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import React from "react";

function ConfirmDialog({ open, title, onClose, onConfirm, message }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle align="center">{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">{message}</Typography>
      </DialogContent>
      <DialogActions className="confirm-dialog__actions">
        <Button variant="contained" color="secondary" onClick={onConfirm}>
          Confirmar
        </Button>
        <Button variant="contained" color="primary" onClick={onClose}>
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
