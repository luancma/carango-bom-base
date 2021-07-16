import React, { useState } from "react";
import InputText from "../InputText";
import InputNumber from "../InputNumber";
import InputCurrency from "../InputCurrency";
import InputSelect from "../InputSelect";
import { Box, Button } from "@material-ui/core";
import PropTypes from "prop-types";

function VehicleForm({ onSubmit, onCancel, brandOptions }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2021);
  const [value, setValue] = useState(0);
  const [minYear, maxYear] = [1900, 2022];
  const handleSubmit = event => {
    event.preventDefault();
    const vehicle = { brand, model, year, value };
    onSubmit(vehicle);
  };
  const checkYearRange = event => {
    let formYear = event.target.value;
    if (formYear < minYear) {
      formYear = minYear;
    } else if (formYear > maxYear) {
      formYear = maxYear;
    }
    setYear(formYear);
  };
  return (
    <form name="vehicle-form" onSubmit={handleSubmit}>
      <InputSelect
        value={brand}
        onSelect={setBrand}
        itemsSelect={brandOptions}
        label="Marca"
        id="marca"
        required
      />
      <InputText
        label="Modelo"
        id="modelo"
        value={model}
        onChange={setModel}
        fullWidth
        required
        margin="normal"
      />
      <InputNumber
        label="Ano"
        id="ano"
        value={year}
        onChange={setYear}
        onBlur={checkYearRange}
        min={minYear}
        max={maxYear}
        fullWidth
        required
        margin="normal"
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
      <Box paddingTop={1} display="flex" justifyContent="flex-end">
        <Box mr={1}>
          <Button variant="contained" color="primary" type="submit">
            Cadastrar
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="secondary" onClick={onCancel}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </form>
  );
}

VehicleForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default VehicleForm;
