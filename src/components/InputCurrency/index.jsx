import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import EventParserUtil from 'util/EventParserUtil';

const InputCurrency = ({ id, value, label, minimum, errors, onChange, currencySymbol, focused, ...props }) => {
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
        const amountValue = EventParserUtil.parseEventValueToNumberIfValueExist(event);
        onChange(amountValue);
      }
    }
  }

  const shouldDisplayCurrency = currencySymbol && value !== undefined && typeof value === "number";
  const haveErrors = Boolean(errors);

  return (
    <TextField
      inputRef={input => input && focused && input.focus()}
      InputLabelProps={{ htmlFor: id }}
      inputProps={
        {
          id,
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