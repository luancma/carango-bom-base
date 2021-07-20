import {
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import React from "react";
import RegisterVehicle from "../../pages/RegisterVehicle";
import { renderWithRouter } from "../test-utils";

describe("RegisterVehicle tests", () => {
  it("should render form and buttons", () => {
    renderWithRouter(<RegisterVehicle />);
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cancelar/i }),
    ).toBeInTheDocument();
  });

  it("should show confirm dialog after clicking cancel", () => {
    renderWithRouter(<RegisterVehicle />);
    fireEvent.click(screen.getByRole("button", { name: /cancelar/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should close confirm dialog", async () => {
    renderWithRouter(<RegisterVehicle />);
    fireEvent.click(screen.getByRole("button", { name: /cancelar/i }));
    fireEvent.click(screen.getByRole("button", { name: /fechar/i }));
    await waitForElementToBeRemoved(() => screen.getByRole("dialog"));
  });
});
