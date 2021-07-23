import React, { useEffect, useState } from "react";
import InputText from "../../../components/InputText";
import InputNumber from "../../../components/InputNumber";
import InputCurrency from "../../../components/InputCurrency";
import InputSelect from "../../../components/InputSelect";
import useFormErrors from "hooks/useFormErrors";
import { validations, minYear, maxYear } from "./validations";
import FormActions from "components/FormActions";


function VehicleForm({ onSubmit, onCancel, brandOptions, vehicle }) {
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2021);
  const [value, setValue] = useState(0);

  const [errors, validateFields, canSubmit] = useFormErrors(validations);

  useEffect(() => {
    if (vehicle) {
      setBrand(vehicle.brand);
      setModel(vehicle.model);
      setYear(vehicle.year);
      setValue(vehicle.value);
    }
  }, [vehicle]);

  useEffect(() => {
    if (brandOptions) {
      setBrands(brandOptions);
    }
  }, [brandOptions])

  const handleSubmit = event => {
    event.preventDefault();
    if (canSubmit()) {
      const vehicle = { brand, model, year, value };
      onSubmit(vehicle);
    }
  };

  return (
    <form name="vehicle-form" aria-label="vehicle form" onSubmit={handleSubmit}>
      <InputSelect
        value={brand}
        onSelect={setBrand}
        itemsSelect={brands}
        label="Marca"
        id="marca"
        required
      />
      <InputText
        label="Modelo"
        name="modelo"
        id="modelo"
        value={model}
        onChange={setModel}
        fullWidth
        required
        margin="normal"
        error={!errors.modelo.valido}
        helperText={errors.modelo.texto}
        onBlur={validateFields}
      />
      <InputNumber
        label="Ano"
        name="ano"
        id="ano"
        value={year}
        onChange={setYear}
        min={minYear}
        max={maxYear}
        fullWidth
        required
        margin="normal"
        error={!errors.ano.valido}
        helperText={errors.ano.texto}
        onBlur={validateFields}
      />
      <InputCurrency
        label="Valor"
        id="valor"
        value={value}
        onChange={setValue}
        minimum={0}
        currencySymbol="R$"
        fullWidth
        required
        margin="normal"
      />
      <FormActions isEdit={!!vehicle && vehicle.id} onCancel={onCancel} />
    </form>
  );
}

export default VehicleForm;
