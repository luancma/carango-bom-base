import React from "react";
import { useHistory, useParams } from "react-router";
import VehicleService from "../../../services/VehicleService";
import VehicleForm from "../VehicleForm";
import { useGetBrands } from "../hooks/useGetBrands";
import { useGetVehicleById } from "../hooks/useGetVehicleById";

function CreateUpdateVehicle() {
  const history = useHistory();
  const { id } = useParams();
  const vehicle = useGetVehicleById(id);

  const brands = useGetBrands();

  function onCancel() {
    history.goBack();
  }

  const onSubmit = vehicle => {
    if (id) {
      VehicleService.update(id, vehicle).then(res => {
        history.goBack();
      });
    } else {
      VehicleService.create(vehicle).then(res => {
        history.goBack();
      });
    }
  };

  return (
    <VehicleForm
      onSubmit={onSubmit}
      onCancel={onCancel}
      brandOptions={brands}
      vehicle={vehicle}
    />
  );
}

export default CreateUpdateVehicle;
