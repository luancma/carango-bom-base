import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import BrandService from "services/BrandService";
import BrandList from "pages/Brand";

jest.mock("services/BrandService");

describe("BrandList component", () => {
  beforeEach(() => {
    BrandService.findAllPaged.mockResolvedValue({
      content: [
        {
          name: "Brand 1",
          id: 1,
        },
      ],
      totalElements: 10,
    });
  });
  it("should render the list", async () => {
    render(<BrandList />);
    expect(await screen.findByRole("grid")).toBeInTheDocument();
    expect(await screen.findByText("Brand 1")).toBeInTheDocument();
  });

  it("should show confirm delete dialog", async () => {
    render(<BrandList />);
    fireEvent.click(await screen.findByRole("button", { name: /remover/i }));
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });
});
