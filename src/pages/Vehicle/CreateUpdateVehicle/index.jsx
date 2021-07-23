import React from 'react';
import { useHistory, useParams } from 'react-router';
import VehicleService from '../../../services/VehicleService';
import VehicleForm from '../VehicleForm';
import { useGetBrands } from "../hooks/useGetBrands";
// import { useGetUserById } from '../hooks/useGetUserById';

function CreateUpdateVehicle() {
  const history = useHistory();
  const { id } = useParams();
  // const user = useGetUserById(id);

  const brands = useGetBrands();

  function onCancel() {
    history.goBack();
  }

  const onSubmit = (username) => {

    if (id) {
      VehicleService.update(id, { id, username })
        .then(res => {
          history.goBack();
        });
    } else {
      VehicleService.create({ username })
        .then(res => {
          history.goBack();
        });
    }
  }

  return (
    <VehicleForm onSubmit={onSubmit} onCancel={onCancel} brandOptions={brands} />
  );
}

export default CreateUpdateVehicle;