import { screen } from "@testing-library/react";
import App from "../App";
import React from "react";
import { renderWithRouter } from "./test-utils";

describe("App tests", () => {
  it("shoud render the app component", () => {
    renderWithRouter(<App />);
    const element = screen.getByTestId("main");
    expect(element).toBeInTheDocument();
  });

  it("should render vehicle form after navigating to /vehicle-new", () => {
    renderWithRouter(<App />, { route: "/vehicle-new" });
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("should render vehicle form after navigating to /vehicle-edit/:id", () => {
    renderWithRouter(<App />, { route: "/vehicle-edit/1" });
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});
