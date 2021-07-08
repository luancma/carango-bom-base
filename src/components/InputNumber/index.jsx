import React from "react";
import { TextField } from "@material-ui/core";

const InputNumber = ({ id, value, label, min, max, onChange, ...props }) => {
  const handlerOnChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <TextField
      {...props}
      inputProps={{ id, "data-testid": "InputNumber-input", min, max }}
      value={value}
      onChange={handlerOnChange}
      label={label}
      type="number"
      InputLabelProps={{ "data-testid": "InputNumber-label", htmlFor: id }}
    />
  );
};

export default InputNumber;
