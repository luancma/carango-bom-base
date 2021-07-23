import React, { useState } from "react";
import { useHistory } from "react-router";
import DataGridPaginated2 from "components/DataGridPaginated2";
import CurrencyUtil from "util/CurrencyUtil";
import VehicleService from "services/VehicleService";
import ConfirmDialog from "components/ConfirmDialog";
import AddButton from "components/AddButton"

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
  }
];

const ListVehicle = () => {
  const history = useHistory();

  const [idToDelete, setIdToDelete] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);
  const confirmProps = {
    title: "Excluir",
    message: "Tem certeza que deseja excluir?",
  };

  const handleItemClick = id => {
    if (id) {
      history.push("/vehicle/" + id);
    }
  };

  const handleDeleteItem = async () => {
    await VehicleService.remove(idToDelete);
    setShowConfirm(false);
    setIdToDelete("");
  };

  const handleOpenDialog = id => {
    setIdToDelete(id);
    setShowConfirm(true);
  };

  const fetchVehicles = async (page, size) => await VehicleService.findAllPaged(page, size);

  return (
    <>
      <div>
        <DataGridPaginated2
          fetchItems={fetchVehicles}
          columns={gridColumns}
          onItemClick={handleItemClick}
          onDelete={handleOpenDialog}
        />
        <AddButton onClick={() => history.push('/vehicle/create')} />
      </div>
      <ConfirmDialog
        title={confirmProps.title}
        message={confirmProps.message}
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => handleDeleteItem()}
      />
    </>
  );
};

export default ListVehicle;
