import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';

import { ReactComponent as DeleteIcon } from "assets/img/delete.svg";

function DeleteTooltipColumn(onDelete, id) {
  return (
    <div>
      <Tooltip title="Remover">
        <IconButton
          aria-label="remover"
          onClick={evt => onDelete(evt, id)}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

const deleteColumn = (onDelete) => {
  return {
    field: "id",
    headerName: " ",
    hideSortIcons: true,
    editable: false,
    resizable: false,
    cellClassName: "",
    disableColumnMenu: true,
    renderCell: function DeleteItem({ row: { id } }) {

      return DeleteTooltipColumn(onDelete, id)
    },
  }
}

export const makeDataGridColumns = (gridData, onDelete) => {
  const columns = [];
  gridData.forEach(data => {
    const item = {
      field: data.field,
      headerName: data.headerName,
      flex: 1
    }
    columns.push(item)
  });
  columns.push(deleteColumn(onDelete))
  return columns;
}

