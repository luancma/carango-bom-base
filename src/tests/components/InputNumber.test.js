import React from 'react';
import { screen, render } from '@testing-library/react';
import InputNumber from '../../components/InputNumber';
import userEvent from '@testing-library/user-event';

describe('InputNumber test', () => {
  it('should display value passed as prop', () => {
    const value = 1;
    render(<InputNumber value={value} />);
    expect(screen.getByTestId('InputNumber-input')).toHaveValue(value);
  });

  it('should call on change function', () => {
    const onChangeFn = jest.fn();
    render(<InputNumber onChange={onChangeFn} />);
    const input = screen.getByTestId('InputNumber-input');
    userEvent.type(input, '10');
    expect(onChangeFn).toHaveBeenCalled();
  });

  it('should display label', () => {
    const label = 'Test Label';
    render(<InputNumber label={label} id={"id"}/>);
    expect(screen.getByLabelText(label, {selector: "input"})).toBeInTheDocument()    
  });

  it('should have type number', () => {
    render(<InputNumber />);
    const input = screen.getByTestId('InputNumber-input');
    expect(input.type).toBe('number');
  });
});
