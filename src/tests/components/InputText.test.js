import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import InputText from '../../components/InputText';

describe('InputText test', () => {
  it('should display value passed as prop', () => {
    const value = 'test';
    render(<InputText value={value} />);
    expect(screen.getByTestId('InputText-input')).toHaveValue(value);
  });

  it('should call on change function', () => {
    const onChangeFn = jest.fn();
    render(<InputText onChange={onChangeFn} />);
    const input = screen.getByTestId('InputText-input');
    fireEvent.change(input, { target: { value: 'changed text' } });
    expect(onChangeFn).toHaveBeenCalled();
  });

  it('should display label', () => {
    const label = 'Test Label';
    render(<InputText label={label} />);
    const element = screen.getByTestId('InputText-label');
    expect(element.textContent).toBe(label);
  });

  it('should have type text', () => {
    render(<InputText />);
    const input = screen.getByTestId('InputText-input');
    expect(input.type).toBe('text');
  });
});
