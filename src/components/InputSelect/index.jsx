import React from "react";
import { Select, FormControl, InputLabel } from "@material-ui/core";

const InputSelect = ({ onSelect, value, label, itemsSelect, ...props }) => {
  const handlerOnChange = (event) => {
    onSelect(event.target.value);
  };
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="demo-simple-select-label">{label}</InputLabel>
      <Select
        native
        label={label}
        value={value}
        onChange={handlerOnChange}
        inputProps={{
          id: "demo-simple-select-label",
          "data-testid": "inputSelect-test",
        }}
        {...props}
      >
        {itemsSelect.map((item, i) => (
          <option key={item.name + i} value={item.name}>
            {item.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
