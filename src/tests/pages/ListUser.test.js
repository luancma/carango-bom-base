import React from "react";
import { screen, render } from "@testing-library/react";
import ListUser from "pages/ListUser";

describe("ListUser component", () => {
  it("should render the list", async () => {
    render(<ListUser />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});
