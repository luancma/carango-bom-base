import React, { useState } from "react";
import DataGridPaginated from "components/DataGridPaginated";
import useVehicle from "hooks/useVehicle";
import VehicleUtil from "util/VehicleUtil";
import ConfirmDialog from "../components/ConfirmDialog";

const ListVehicle = () => {
  const vehiclesPerPage = 10;
  const [defaultPage, setDefaultPage] = useState(0);
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
    console.log(`You clicked in vehicle with id ${id}`);
  };

  const handleDeleteItem = async () => {
    await deleteVehicleById(idToDelete);
    setDefaultPage(0);
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
      <div style={{ height: 300, width: "100%" }}>
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
