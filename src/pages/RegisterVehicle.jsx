import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import VehicleForm from "../components/VehicleForm";
import ConfirmDialog from "../components/ConfirmDialog";
import MarcaService from "services/MarcaService";

function RegisterVehicle() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [brandOptions, setBrandOptions] = useState([]);
  const confirmProps = {
    title: "Cancelar",
    message: "As alterações serão perdidas. Tem certeza que deseja cancelar?",
  };
  const history = useHistory();

  const formatBrands = brands => {
    const formattedBrands = brands.map(brand => {
      return { name: brand.nome, value: brand.id };
    });
    formattedBrands.unshift({ name: "Escolha a marca", value: "" });
    return formattedBrands;
  };

  useEffect(() => {
    const getBrands = async () => {
      const options = await MarcaService.listar();
      setBrandOptions(formatBrands(options));
    };
    getBrands();
  }, []);

  const onSubmit = vehicle => {
    // TODO: post to api
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
