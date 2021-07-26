import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import VehicleService from "services/VehicleService";

import VehicleList from "pages/Vehicle";

jest.mock("services/VehicleService");

describe("VehicleList component", () => {
  beforeEach(() => {
    VehicleService.findAllPaged.mockResolvedValue({
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
  it("should render the list", async () => {
    render(<VehicleList />);
    expect(await screen.findByRole("grid")).toBeInTheDocument();
    expect(await screen.findByText("Yaris")).toBeInTheDocument();
  });
  // it("should show confirm delete dialog", async () => {
  //   render(<VehicleList />);
  //   fireEvent.click(await screen.findByRole("button", { name: /remover/i }));
  //   expect(await screen.findByRole("dialog")).toBeInTheDocument();
  // });
});
