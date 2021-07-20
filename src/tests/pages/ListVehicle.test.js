import React from "react";
import { screen, render } from "@testing-library/react";

import ListVehicle from "pages/ListVehicle";

describe("ListVehicle component", () => {
  it("should render the list", () => {
    render(<ListVehicle />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});
