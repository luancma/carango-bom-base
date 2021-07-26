import { screen } from "@testing-library/react";
import React from "react";
import CreateUpdateVehicle from "pages/Vehicle/CreateUpdateVehicle";
import { renderWithRouter } from "../../test-utils";

describe("RegisterVehicle tests", () => {
  it("should render form and buttons", () => {
    renderWithRouter(<CreateUpdateVehicle />);
    expect(
      screen.getByRole("form", { name: "vehicle form" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cancelar/i }),
    ).toBeInTheDocument();
  });
});
