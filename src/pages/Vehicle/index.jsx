import React from "react";
import { useHistory } from "react-router";
import DataGridPaginated2 from "components/DataGridPaginated";
import CurrencyUtil from "util/CurrencyUtil";
import VehicleService from "services/VehicleService";
import AddButton from "components/AddButton";

const gridColumns = [
  {
    field: "brand",
    headerName: "Marca",
    flex: 1,
    valueGetter: params => {
      return params.row.brand.name;
    },
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
    flex: 1,
    valueFormatter: params =>
      `R$ ${CurrencyUtil.formatCurrencyWithDots(params.row.price)}`,
  },
];

const ListVehicle = () => {
  const history = useHistory();

  const handleItemClick = id => {
    if (id) {
      history.push("/vehicle/" + id);
    }
  };

  const handleDeleteItem = async id => {
    await VehicleService.remove(id);
  };

  const fetchVehicles = async (page, size) =>
    await VehicleService.findAllPaged(page, size);

  return (
    <>
      <div>
        <DataGridPaginated2
          fetchItems={fetchVehicles}
          columns={gridColumns}
          onItemClick={handleItemClick}
          onDelete={handleDeleteItem}
        />
        <AddButton onClick={() => history.push("/vehicle/create")} />
      </div>
    </>
  );
};

export default ListVehicle;
