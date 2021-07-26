import { screen } from "@testing-library/react";
import React from "react";
import CreateUpdateBrand from "pages/Brand/CreateUpdateBrand";
import { renderWithRouter } from "../../test-utils";

describe("CreateUpdateBrand tests", () => {
  it("should render form and buttons", () => {
    renderWithRouter(<CreateUpdateBrand />);
    expect(
      screen.getByRole("form", { name: "brand form" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cancelar/i }),
    ).toBeInTheDocument();
  });
});
