import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { ReactComponent as DeleteIcon } from "assets/img/delete.svg";

class UserUtil {
  static getUserColumns({ onDelete }) {
    return [
      {
        field: "username",
        headerName: "Nome",
        flex: 1,
      },
      {
        field: "id",
        headerName: " ",
        hideSortIcons: true,
        editable: false,
        resizable: false,
        cellClassName: "",
        disableColumnMenu: true,
        renderCell: function DeleteItem({ row: { id } }) {
          return (
            <div>
              <Tooltip title="Remover">
                <IconButton
                  aria-label="remover"
                  onClick={event => onDelete(event, id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          );
        },
      },
    ];
  }
}

export default UserUtil;
