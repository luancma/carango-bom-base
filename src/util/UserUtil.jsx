import React from "react";
import DeleteItem from "../components/DeleteItem";

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
        // eslint-disable-next-line react/display-name
        renderCell: ({ row: { id } }) => (
          <DeleteItem id={id} onDelete={onDelete} />
        ),
      },
    ];
  }
}

export default UserUtil;
