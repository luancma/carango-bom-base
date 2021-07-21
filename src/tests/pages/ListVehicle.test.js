import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { screen, render, fireEvent } from "@testing-library/react";
import vehicleService from "services/VehicleService";
import useVehicle from "hooks/useVehicle";

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
  it("should render the list", async () => {
    render(<ListVehicle />);
    const { result, waitForNextUpdate } = renderHook(() =>
      useVehicle({ size: 10 }),
    );

    act(() => {
      result.current.fetchVehicles();
    });

    await waitForNextUpdate();
    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getByText("Yaris")).toBeInTheDocument();
  });
  it("should show confirm delete dialog", async () => {
    render(<ListVehicle />);
    const { result, waitForNextUpdate } = renderHook(() =>
      useVehicle({ size: 10 }),
    );

    act(() => {
      result.current.fetchVehicles();
    });

    await waitForNextUpdate();
    fireEvent.click(screen.getByRole("button", { name: /remover/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
