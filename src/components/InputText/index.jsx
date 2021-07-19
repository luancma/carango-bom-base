import React from "react";
import { TextField } from "@material-ui/core";

const InputText = ({
  onChange,
  onBlur,
  value,
  label,
  minLength,
  maxLength,
  id,
  ...props
}) => {
  return (
    <TextField
      inputProps={{ id: id, minLength, maxLength }}
      onChange={event => onChange(event.target.value)}
      onBlur={onBlur}
      value={value}
      label={label}
      type="text"
      InputLabelProps={{ htmlFor: id }}
      variant="outlined"
      {...props}
    />
  );
};

export default InputText;
