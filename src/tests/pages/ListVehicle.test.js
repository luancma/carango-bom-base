import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import vehicleService from "services/VehicleService";

import ListVehicle from "pages/ListVehicle";

jest.mock("services/VehicleService");

describe("ListVehicle component", () => {
  beforeEach(() => {
    vehicleService.getVehicles.mockResolvedValue({
      content: [
        {
          model: "Yaris",
          year: 2020,
          price: 100000,
          brand: {
            name: "Toyota",
          },
          id: 1,
        },
      ],
      total: 10,
    });
  });
  it("should render the list", () => {
    render(<ListVehicle />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getByText("Yaris")).toBeInTheDocument();
  });
  it("should show confirm delete dialog", () => {
    render(<ListVehicle />);
    fireEvent.click(screen.getByRole("button", { name: /remover/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
