import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";

import { ReactComponent as DeleteIcon } from "assets/img/delete.svg";

export function DeleteTooltipColumn({ onDelete, id }) {
  return (
    <div>
      <Tooltip title="Remover">
        <IconButton aria-label="remover" onClick={evt => onDelete(evt, id)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

const deleteColumn = onDelete => {
  return {
    field: "id",
    headerName: " ",
    hideSortIcons: true,
    editable: false,
    resizable: false,
    cellClassName: "",
    disableColumnMenu: true,
    renderCell: function DeleteItem({ row: { id } }) {
      return <DeleteTooltipColumn onDelete={onDelete} id={id} />;
    },
  };
};

export const makeDataGridColumns = (gridData, gridColumnOptions = {}) => {
  const { onDelete, enableDelete = true } = gridColumnOptions
  const columns = [];
  gridData.forEach(data => {
    columns.push(data);
  });
  if (enableDelete) {
    columns.push(deleteColumn(onDelete));
  }
  return columns;
};
