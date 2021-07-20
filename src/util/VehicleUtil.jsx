import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import CurrencyUtil from "util/CurrencyUtil";

import { ReactComponent as DeleteIcon } from "assets/img/delete.svg";

class VehicleUtil {
  static getVehicleColumns({ onDelete }) {
    return [
      {
        field: "brand",
        headerName: "Marca",
        valueGetter: (params) => {
          return params.row.brand.name;
        },
        flex: 1,
      },
      {
        field: "model",
        headerName: "Modelo",
        flex: 1,
      },
      {
        field: "year",
        headerName: "Ano",
        flex: 1,
      },
      {
        field: "price",
        headerName: "Valor",
        valueFormatter: (params) =>
          `R$ ${CurrencyUtil.formatCurrencyWithDots(params.row.price)}`,
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
        renderCell: ({ row: { id } }) => {
          return (
            <div>
              <Tooltip title="Remover">
                <IconButton
                  aria-label="remover"
                  onClick={(evt) => onDelete(evt, id)}
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

export default VehicleUtil;
