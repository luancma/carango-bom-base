import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Login from "pages/Login";

jest.mock("services/LoginService");

describe("Login tests", () => {
  it("should render form and buttons", () => {
    render(<Login />);
    expect(
      screen.getByRole("form", { name: "login form" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });
});
