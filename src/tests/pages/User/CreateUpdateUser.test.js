import { screen } from "@testing-library/react";
import React from "react";
import CreateUpdateUser from "pages/User/CreateUpdateUser";
import { renderWithRouter } from "../../test-utils";

describe("CreateUpdateUser tests", () => {
  it("should render form and buttons", () => {
    renderWithRouter(<CreateUpdateUser />);
    expect(screen.getByRole("form", { name: "user form" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cancelar/i }),
    ).toBeInTheDocument();
  });
});
