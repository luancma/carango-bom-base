import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import UserForm from "pages/User/UserForm";
import { validations } from "pages/User/UserForm/validations";

describe("UserForm page", () => {
  it("should show form with all fields", () => {
    render(<UserForm />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^senha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirmar senha/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cancelar/i }),
    ).toBeInTheDocument();
  });

  it("should call onSubmit function when submit button is clicked", () => {
    const submitFn = jest.fn();
    render(<UserForm onSubmit={submitFn} />);
    const submitButton = screen.getByRole("button", { name: /cadastrar/i });
    fireEvent.click(submitButton);
    expect(submitFn).toHaveBeenCalledTimes(1);
  });

  it("should call onCancel function when cancel button is clicked", () => {
    const cancelFn = jest.fn();
    render(<UserForm onCancel={cancelFn} />);
    const cancelButton = screen.getByRole("button", { name: /cancelar/i });
    fireEvent.click(cancelButton);
    expect(cancelFn).toHaveBeenCalledTimes(1);
  });

  it("should return the correct object on submit", () => {
    let response;
    const submitFn = user => (response = user);
    render(<UserForm onSubmit={submitFn} />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "teste" },
    });
    fireEvent.change(screen.getByLabelText(/^senha/i), {
      target: { value: "senha" },
    });
    fireEvent.change(screen.getByLabelText(/confirmar senha/i), {
      target: { value: "senha" },
    });
    fireEvent.click(screen.getByRole("button", { name: /cadastrar/i }));
    expect(response).toEqual({
      username: "teste",
      password: "senha",
    });
  });

  it("should validate username and password", () => {
    expect(validations.username("ab")).toEqual({
      isValid: false,
      text: "Nome de usuário deve ter entre 3 e 100 caracteres.",
    });
    expect(validations.username("abcd")).toEqual({ isValid: true, text: "" });
    expect(validations.password("abcde")).toEqual({
      isValid: false,
      text: "Senha deve ter entre 6 e 50 caracteres.",
    });
    expect(validations.password("abcdef1234")).toEqual({
      isValid: true,
      text: "",
    });
    expect(
      validations.checkPassword({
        password: "password",
        confirmPassword: "different",
      }),
    ).toEqual({
      isValid: false,
      text: "Senha e Confirmar Senha devem ser iguais.",
    });
    expect(
      validations.checkPassword({
        password: "same-pass",
        confirmPassword: "same-pass",
      }),
    ).toEqual({
      isValid: true,
      text: "",
    });
  });
});
