import React from 'react';
import { TextField } from '@material-ui/core';

const InputText = ({ onChange, value, label }) => {
  return (
    <TextField
      inputProps={{ 'data-testid': 'InputText-input' }}
      onChange={onChange}
      value={value}
      label={label}
      type="text"
      InputLabelProps={{ 'data-testid': 'InputText-label' }}
    />
  );
};

export default InputText;
