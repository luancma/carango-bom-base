import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import UserService from "services/UserService";
import UserList from "pages/User";

jest.mock("services/UserService");

describe("UserList component", () => {
  beforeEach(() => {
    UserService.findAllPaged.mockResolvedValue({
      content: [
        {
          username: "User01",
          id: 1,
        },
      ],
      totalElements: 10,
    });
  });
  it("should render the list", async () => {
    render(<UserList />);
    expect(await screen.findByRole("grid")).toBeInTheDocument();
    expect(await screen.findByText("User01")).toBeInTheDocument();
  });

  it("should show confirm delete dialog", async () => {
    render(<UserList />);
    fireEvent.click(await screen.findByRole("button", { name: /remover/i }));
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });
});
