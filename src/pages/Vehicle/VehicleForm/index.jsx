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
  const [brandId, setBrandId] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2021);
  const [price, setPrice] = useState(0);

  const [errors, validateFields, canSubmit] = useFormErrors(validations);

  useEffect(() => {
    if (vehicle?.brand) {
      setBrandId(vehicle.brand.id);
      setModel(vehicle.model);
      setYear(vehicle.year);
      setPrice(vehicle.price);
    }
  }, [vehicle]);

  useEffect(() => {
    if (brandOptions) {
      setBrands(brandOptions);
    }
  }, [brandOptions]);

  const handleSubmit = event => {
    event.preventDefault();
    if (canSubmit()) {
      const vehicle = { brandId, model, year, price };
      onSubmit(vehicle);
    }
  };

  return (
    <form name="vehicle-form" aria-label="vehicle form" onSubmit={handleSubmit}>
      <InputSelect
        value={brandId}
        onSelect={setBrandId}
        itemsSelect={brands}
        label="Marca"
        id="brand"
        name="brand"
        required
      />
      <InputText
        label="Modelo"
        name="model"
        id="model"
        value={model}
        onChange={setModel}
        fullWidth
        required
        margin="normal"
        error={!errors.model.isValid}
        helperText={errors.model.text}
        onBlur={validateFields}
      />
      <InputNumber
        label="Ano"
        name="year"
        id="year"
        value={year}
        onChange={setYear}
        min={minYear}
        max={maxYear}
        fullWidth
        required
        margin="normal"
        error={!errors.year.isValid}
        helperText={errors.year.text}
        onBlur={validateFields}
      />
      <InputCurrency
        label="Valor"
        id="price"
        name="price"
        value={price}
        onChange={setPrice}
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
