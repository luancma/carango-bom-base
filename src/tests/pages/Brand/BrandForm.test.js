import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import BrandForm from "pages/Brand/BrandForm";
import { validations } from "pages/Brand/BrandForm/validations";

describe("BrandForm page", () => {
  it("should show form with all fields", () => {
    render(<BrandForm />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByLabelText(/marca/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cancelar/i }),
    ).toBeInTheDocument();
  });

  it("should call onSubmit function when submit button is clicked", () => {
    const submitFn = jest.fn();
    render(<BrandForm onSubmit={submitFn} />);
    const submitButton = screen.getByRole("button", { name: /cadastrar/i });
    fireEvent.click(submitButton);
    expect(submitFn).toHaveBeenCalledTimes(1);
  });

  it("should call onCancel function when cancel button is clicked", () => {
    const cancelFn = jest.fn();
    render(<BrandForm onCancel={cancelFn} />);
    const cancelButton = screen.getByRole("button", { name: /cancelar/i });
    fireEvent.click(cancelButton);
    expect(cancelFn).toHaveBeenCalledTimes(1);
  });

  it("should return the correct object on submit", () => {
    let response;
    const submitFn = brand => (response = brand);
    render(<BrandForm onSubmit={submitFn} />);
    fireEvent.change(screen.getByLabelText(/marca/i), {
      target: { value: "teste" },
    });
    fireEvent.click(screen.getByRole("button", { name: /cadastrar/i }));
    expect(response).toEqual("teste");
  });

  it("should validate brand name", () => {
    expect(validations.name("ab")).toEqual({
      isValid: false,
      text: "Nome da marca deve ter entre 3 e 100 caracteres.",
    });
    expect(validations.name("abcd")).toEqual({ isValid: true, text: "" });
  });
});
