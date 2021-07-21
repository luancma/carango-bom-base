import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { ReactComponent as DeleteIcon } from "assets/img/delete.svg";

function DeleteItem({ id, onDelete }) {
  return (
    <div>
      <Tooltip title="Remover">
        <IconButton aria-label="remover" onClick={event => onDelete(event, id)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default DeleteItem;
