import { Box, Button } from "@material-ui/core";
import React from "react";

function FormActions({ isEdit = false, onCancel }) {
  return (
    <Box paddingTop={1} display="flex" justifyContent="flex-end">
      <Box mr={1}>
        <Button variant="contained" color="primary" type="submit">
          {isEdit ? "Salvar" : "Cadastrar"}
        </Button>
      </Box>
      <Box>
        <Button variant="contained" color="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </Box>
    </Box>
  );
}

export default FormActions;
