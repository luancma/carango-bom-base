import React, { useState } from "react";

import { useHistory } from "react-router";

import DataGridPaginated from "components/DataGridPaginated";

import useVehicle from "hooks/useVehicle";

import VehicleUtil from "util/VehicleUtil";

import ConfirmDialog from "../components/ConfirmDialog";

const ListVehicle = () => {
  const history = useHistory();
  const vehiclesPerPage = 10;
  const [defaultPage, setDefaultPage] = useState({ value: 0 });
  const [idToDelete, setIdToDelete] = useState("");

  const { vehicles, loading, fetchVehicles, vehiclesTotal, deleteVehicleById } =
    useVehicle({
      size: vehiclesPerPage,
    });

  const [showConfirm, setShowConfirm] = useState(false);
  const confirmProps = {
    title: "Excluir",
    message: "Tem certeza que deseja excluir?",
  };

  const handleItemClick = id => {
    if (id) {
      history.push("/vehicle-edit/" + id);
    }
  };

  const handleDeleteItem = async () => {
    await deleteVehicleById(idToDelete);
    setDefaultPage({ value: 0 });
    setShowConfirm(false);
  };

  const handleOpenDialog = (evt, id) => {
    evt.stopPropagation();
    setIdToDelete(id);
    setShowConfirm(true);
  };

  const columns = VehicleUtil.getVehicleColumns({ onDelete: handleOpenDialog });

  return (
    <>
      <div>
        <DataGridPaginated
          defaultPage={defaultPage}
          loading={loading}
          items={vehicles}
          itemsPerPage={vehiclesPerPage}
          totalItems={vehiclesTotal}
          fetchItems={fetchVehicles}
          onItemClick={handleItemClick}
          columns={columns}
        />
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
