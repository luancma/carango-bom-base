import React, { useState } from "react";

import DataGridPaginated from "components/DataGridPaginated";

import useVehicle from "hooks/useVehicle";

import VehicleUtil from "util/VehicleUtil";

const ListVehicle = () => {
  const vehiclesPerPage = 10;
  const [defaultPage, setDefaultPage] = useState(0);
  const { vehicles, loading, fetchVehicles, vehiclesTotal, deleteVehicleById } =
    useVehicle({
      size: vehiclesPerPage,
    });

  const handleItemClick = (id) => {
    console.log(`You clicked in vehicle with id ${id}`);
  };

  const handleDeleteItem = async (evt, id) => {
    evt.stopPropagation();
    await deleteVehicleById(id);
    setDefaultPage(0);
  };

  const columns = VehicleUtil.getVehicleColumns({ onDelete: handleDeleteItem });

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGridPaginated
        defaultPage={defaultPage}
        loading={loading}
        items={vehicles}
        itemsPerPage={vehiclesPerPage}
        totalItems={vehiclesTotal}
        fetchItems={fetchVehicles}
        onItemClick={handleItemClick}
        onDeleteItem={handleDeleteItem}
        columns={columns}
      />
    </div>
  );
};

export default ListVehicle;
