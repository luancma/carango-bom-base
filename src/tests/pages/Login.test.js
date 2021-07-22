import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Login from "pages/Login";
import LoginService from "services/LoginService";

jest.mock("services/LoginService");

describe("Login tests", () => {
  it("should render form and buttons", () => {
    render(<Login />);
    expect(
      screen.getByRole("form", { name: "login form" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  it("should successfully call login method", () => {
    LoginService.login.mockResolvedValue({ token: "test" });
    render(<Login />);
    fireEvent.change(screen.getByLabelText(/usuário/i), {
      target: { value: "user" },
    });
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByRole("button", { name: /entrar/i }));
    expect(LoginService.login).toHaveBeenCalled();
  });
});
