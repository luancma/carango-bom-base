import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import VehicleForm from "../components/VehicleForm";
import ConfirmDialog from "../components/ConfirmDialog";
import BrandService from "services/BrandService";
import { formatBrands } from "libs/brand";

function RegisterVehicle() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [brandOptions, setBrandOptions] = useState([]);
  const [existingVehicle, setExistingVehicle] = useState(null);
  const confirmProps = {
    title: "Cancelar",
    message: "As alterações serão perdidas. Tem certeza que deseja cancelar?",
  };
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const getBrands = async () => {
      const options = await BrandService.findAllPaged();
      setBrandOptions(formatBrands(options));
    };
    getBrands();
  }, []);

  useEffect(() => {
    if (id) {
      const getVehicle = async () => {
        // TODO: remove mock and get vehicle by api request
        // const vehicle = await VeiculoService.findById(id);
        const mockVehicle = {
          brand: "74",
          model: "Teste",
          value: 30000,
          year: 2019,
        };
        setExistingVehicle(mockVehicle);
      };
      getVehicle();
    }
  }, [id]);

  const onSubmit = vehicle => {
    // TODO: post (put if id) to api
  };

  const onCancel = () => setShowConfirm(true);

  const onCloseConfirm = () => {
    setShowConfirm(false);
  };

  const onConfirmCancel = () => history.push("/");

  return (
    <div>
      <VehicleForm
        onSubmit={onSubmit}
        onCancel={onCancel}
        brandOptions={brandOptions}
        existingVehicle={existingVehicle}
      />
      <ConfirmDialog
        open={showConfirm}
        title={confirmProps.title}
        message={confirmProps.message}
        onClose={onCloseConfirm}
        onConfirm={onConfirmCancel}
      />
    </div>
  );
}

export default RegisterVehicle;
