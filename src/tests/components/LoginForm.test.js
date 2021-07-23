import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import LoginForm from "../../pages/Login/LoginForm";

describe("LoginForm page", () => {
  it("should show form with all fields", () => {
    render(<LoginForm />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  it("should call onSubmit function when submit button is clicked", () => {
    const submitFn = jest.fn();
    render(<LoginForm onSubmit={submitFn} />);
    const submitButton = screen.getByRole("button", { name: /entrar/i });
    fireEvent.click(submitButton);
    expect(submitFn).toHaveBeenCalledTimes(1);
  });

  it("should return the correct object on submit", () => {
    let response;
    const submitFn = user => (response = user);
    render(<LoginForm onSubmit={submitFn} />);
    fireEvent.change(screen.getByLabelText(/usuário/i), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));
    expect(response).toEqual({
      username: "test",
      password: "password",
    });
  });
});
