import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputCurrency, { parseEventValueToNumberIfValueExist } from 'components/InputCurrency'

describe('InputCurrency component', () => {
  it('should display the label passed as prop', () => {
    const label = 'Amount';
    render(<InputCurrency id="input-currency" label={label} />);
    expect(screen.getByLabelText(label, { selector: 'input' })).toBeInTheDocument();
  })

  it('should display the amount when pass value as prop', () => {
    const amount = 1000;
    render(<InputCurrency value={amount} />);
    expect(screen.getByTestId('InputCurrency-input')).toHaveValue(amount);
  })
  
  it('should not display input currency when passing less than minimum value as prop', () => {
    const amount = -1000;
    render(<InputCurrency minimum={0} value={amount} />);
    expect(screen.queryByTestId('InputCurrency-input')).not.toBeInTheDocument();
  })
  
  it('should call the onChange when value change', () => {
    const onChangeFn = jest.fn();
    render(<InputCurrency onChange={onChangeFn} />);
    const input = screen.getByTestId('InputCurrency-input');
    userEvent.type(input, '10');
    expect(onChangeFn).toHaveBeenCalled();
  })
  
  it('should not display negative values when minimum value is 0', () => {
    const amount = -1000;
    render(<InputCurrency minimum={0} value={0} />);
    const input = screen.getByTestId('InputCurrency-input');
    userEvent.type(input, amount.toString());
    expect(input).not.toHaveValue(amount);
  })

  it('should display the currency symbol when passing the currency symbol and value as integer in props', () => {
    const amount = 1000;
    const symbol = 'R$';
    render(<InputCurrency minimum={0} value={amount} currencySymbol={symbol} />);
    expect(screen.getByText(symbol)).toBeInTheDocument();
  })

  it('should have focus on render when passing focused props', () => {
    render(<InputCurrency minimum={0} value={10} currencySymbol={'R$'} focused />)
    const input = screen.getByTestId('InputCurrency-input');
    expect(input).toHaveFocus();
  })

  it('should not have focus on render when not passing focused props', () => {
    render(<InputCurrency minimum={0} value={10} currencySymbol={'R$'} />)
    const input = screen.queryByTestId('InputCurrency-input');
    expect(input).not.toHaveFocus();
  })

  it('should not display currency when passing value as empty string on props', () => {
    const symbol = 'R$'
    render(<InputCurrency minimum={0} value={""} currencySymbol={symbol} />)
    expect(screen.queryByText(symbol)).not.toBeInTheDocument();
  })

  it('should not display currency when passing value undefined as props', () => {
    const symbol = 'R$'
    render(<InputCurrency minimum={0} value={undefined} currencySymbol={symbol} />)
    expect(screen.queryByText(symbol)).not.toBeInTheDocument();
  })

  it('should not display input when passing value NaN as props', () => {
    render(<InputCurrency minimum={0} value={NaN} currencySymbol="R$" />)
    expect(screen.queryByTestId('InputCurrency-input')).not.toBeInTheDocument();
  })

  it('should display error when passing error object with message inside props', () => {
    const errors = { message: 'Obrigatório' }
    render(<InputCurrency minimum={0} value={10} currencySymbol="R$" errors={errors} />)
    expect(screen.getByText('Obrigatório')).toBeInTheDocument();
  })
})