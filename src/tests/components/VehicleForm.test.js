import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import VehicleForm from "../../components/VehicleForm";

describe("VehicleForm page", () => {
  it("should show form with all fields", () => {
    render(<VehicleForm />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByLabelText(/modelo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ano/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/valor/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cancelar/i }),
    ).toBeInTheDocument();
  });

  it("should call onSubmit function when submit button is clicked", () => {
    const submitFn = jest.fn();
    render(<VehicleForm onSubmit={submitFn} />);
    const submitButton = screen.getByRole("button", { name: /cadastrar/i });
    fireEvent.click(submitButton);
    expect(submitFn).toHaveBeenCalledTimes(1);
  });

  it("should call onCancel function when cancel button is clicked", () => {
    const cancelFn = jest.fn();
    render(<VehicleForm onCancel={cancelFn} />);
    const cancelButton = screen.getByRole("button", { name: /cancelar/i });
    fireEvent.click(cancelButton);
    expect(cancelFn).toHaveBeenCalledTimes(1);
  });

  it("should return the correct object on submit", () => {
    let response;
    const submitFn = vehicle => (response = vehicle);
    render(<VehicleForm onSubmit={submitFn} />);
    fireEvent.change(screen.getByLabelText(/modelo/i), {
      target: { value: "Modelo X" },
    });
    fireEvent.change(screen.getByLabelText(/ano/i), {
      target: { value: 2020 },
    });
    fireEvent.change(screen.getByLabelText(/valor/i), {
      target: { value: 40000 },
    });
    fireEvent.click(screen.getByRole("button", { name: /cadastrar/i }));
    expect(response).toEqual({ model: "Modelo X", year: 2020, value: 40000 });
  });

  it("should apply year range validation on blur", () => {
    render(<VehicleForm />);
    const yearField = screen.getByLabelText(/ano/i);
    fireEvent.change(yearField, {
      target: { value: 1890 },
    });
    fireEvent.blur(yearField);
    expect(Number(yearField.value)).toBe(1900);
  });
});
