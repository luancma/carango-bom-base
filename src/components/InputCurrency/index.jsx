import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';

export const parseEventValueToNumberIfValueExist = event => {
  let result = '';

  if (event && event.target && event.target.value) {
    result = parseFloat(event.target.value);
  }

  return result;
}

const InputCurrency = ({ value, label, minimum, errors, onChange, currencySymbol, focused, ...props }) => {
  if ((value !== undefined && isNaN(value)) || (minimum !== undefined && value < minimum)) {
    return null
  }

  const handleChange = event => {
    const { target: { value: eventValue } } = event;

    if (onChange) {
      if (
        (minimum === undefined || value === undefined) ||
        (minimum !== undefined && eventValue >= minimum)
      ) {
        const amountValue = parseEventValueToNumberIfValueExist(event);
        onChange(amountValue);
      }
    }
  }

  const shouldDisplayCurrency = currencySymbol && value !== undefined && typeof value === "number";
  const haveErrors = Boolean(errors);

  return (
    <TextField
      inputRef={input => input && focused && input.focus()}
      InputLabelProps={{ htmlFor: 'input-currency' }}
      inputProps={
        {
          id: 'input-currency',
          'data-testid': 'InputCurrency-input',
          min: minimum || 0
        }
      }
      label={label}
      helperText={haveErrors ? errors.message : ''}
      error={haveErrors}
      value={value}
      type="number"
      onChange={handleChange}
      variant="outlined"
      {...props}
      InputProps={{
        startAdornment: shouldDisplayCurrency && <InputAdornment position="start">{currencySymbol}</InputAdornment>
      }}
    />
  )
}

export default InputCurrency;