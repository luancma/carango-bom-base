import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import UserForm from "../../components/UserForm";
import {
  validations,
  validateConfirmPassword,
} from "components/UserForm/validations";

describe("UserForm page", () => {
  it("should show form with all fields", () => {
    render(<UserForm />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
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
    fireEvent.change(screen.getByLabelText(/usuário/i), {
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
    expect(validations.usuario("ab")).toEqual({
      valido: false,
      texto: "Usuário deve ter entre 3 e 100 caracteres.",
    });
    expect(validations.usuario("abcd")).toEqual({ valido: true, texto: "" });
    expect(validations.senha("abcde")).toEqual({
      valido: false,
      texto: "Senha deve ter entre 6 e 50 caracteres.",
    });
    expect(validations.senha("abcdef1234")).toEqual({
      valido: true,
      texto: "",
    });
    expect(validateConfirmPassword("password", "different")).toEqual({
      valido: false,
      texto: "Senha e Confirmar Senha devem ser iguais.",
    });
    expect(validateConfirmPassword("same-pass", "same-pass")).toEqual({
      valido: true,
      texto: "",
    });
  });
});
