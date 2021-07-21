/* eslint-disable react/display-name */
import React from "react";

import DeleteItem from "components/DeleteItem";

import CurrencyUtil from "util/CurrencyUtil";

class VehicleUtil {
  static getVehicleColumns({ onDelete }) {
    return [
      {
        field: "brand",
        headerName: "Marca",
        valueGetter: params => {
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
        valueFormatter: params =>
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
        renderCell: ({ row: { id } }) => (
          <DeleteItem id={id} onDelete={onDelete} />
        ),
      },
    ];
  }
}

export default VehicleUtil;
