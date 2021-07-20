import { renderWithRouter } from "../test-utils";
import React from "react";
import HeaderAndSidebar from "../../components/HeaderAndSidebar";
import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

describe("HeaderAndSidebar tests", () => {
  it("should render app bar title", () => {
    renderWithRouter(<HeaderAndSidebar />);
    expect(screen.getByRole("heading").textContent).toMatch(/carango bom/i);
  });

  it("should change title according to location", () => {
    renderWithRouter(<HeaderAndSidebar />, { route: "/vehicle-new" });
    expect(screen.getByRole("heading").textContent).toMatch(
      /cadastrar veículo/i,
    );
  });

  it("should show sidebar after clicking on menu", () => {
    renderWithRouter(<HeaderAndSidebar />);
    fireEvent.click(screen.getByRole("button", { name: /menu/i }));
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should hide sidebar after clicking on close menu", async () => {
    renderWithRouter(<HeaderAndSidebar />);
    fireEvent.click(screen.getByRole("button", { name: /menu/i }));
    fireEvent.click(screen.getByRole("button", { name: /close menu/i }));
    await waitForElementToBeRemoved(() => screen.getByRole("navigation"));
  });
});
