import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "pages/Dashboard";

jest.mock("services/DashboardService");

jest.mock("pages/Dashboard/hooks/useGetDashboard", () => ({
  useGetDashboard: () => [
    {
      brand: "Name",
      totalVehicle: 1,
      totalPrice: 15000,
    },
  ],
}));

describe("Dashboard component", () => {
  it("should render a list of brands", async () => {
    render(<Dashboard />);

    const brandName = screen.getByText("Name");
    const totalPrice = screen.getByText("15 000,00 BRL");

    expect(brandName).toBeInTheDocument(true);
    expect(totalPrice).toBeInTheDocument(true);
  });
});
