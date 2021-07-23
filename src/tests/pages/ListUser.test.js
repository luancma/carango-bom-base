import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { screen, render, fireEvent } from "@testing-library/react";
import userService from "services/UserService";
import ListUser from "pages/ListUser";
import useUser from "hooks/useUser";

jest.mock("services/UserService");

describe("ListUser component", () => {
  beforeEach(() => {
    userService.getUsers.mockResolvedValue({
      content: [
        {
          username: "User01",
          id: 1,
        },
      ],
      total: 10,
    });
  });
  it("should render the list", async () => {
    render(<ListUser />);
    const { result, waitForNextUpdate } = renderHook(() =>
      useUser({ size: 10 }),
    );

    act(() => {
      result.current.fetchUsers();
    });

    await waitForNextUpdate();
    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getByText("User01")).toBeInTheDocument();
  });

  it("should show confirm delete dialog", async () => {
    render(<ListUser />);
    const { result, waitForNextUpdate } = renderHook(() =>
      useUser({ size: 10 }),
    );

    act(() => {
      result.current.fetchUsers();
    });

    await waitForNextUpdate();
    fireEvent.click(screen.getByRole("button", { name: /remover/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
