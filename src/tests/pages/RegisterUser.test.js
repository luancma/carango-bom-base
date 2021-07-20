import {
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import React from "react";
import RegisterUser from "../../pages/RegisterUser";
import { renderWithRouter } from "../test-utils";

describe("RegisterUser tests", () => {
  it("should render form and buttons", () => {
    renderWithRouter(<RegisterUser />);
    expect(screen.getByRole("form", { name: "user form" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cancelar/i }),
    ).toBeInTheDocument();
  });

  it("should show confirm dialog after clicking cancel", () => {
    renderWithRouter(<RegisterUser />);
    fireEvent.click(screen.getByRole("button", { name: /cancelar/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should close confirm dialog", async () => {
    renderWithRouter(<RegisterUser />);
    fireEvent.click(screen.getByRole("button", { name: /cancelar/i }));
    fireEvent.click(screen.getByRole("button", { name: /fechar/i }));
    await waitForElementToBeRemoved(() => screen.getByRole("dialog"));
  });
});
