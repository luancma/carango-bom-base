import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import DeleteItem from "../../components/DeleteItem";

describe("DeleteItem tests", () => {
  it("should render delete button", () => {
    render(<DeleteItem />);
    expect(
      screen.getByRole("button", { name: /remover/i }),
    ).toBeInTheDocument();
  });

  it("should call on delete function when clicked", () => {
    const onDelete = jest.fn();
    render(<DeleteItem id="1" onDelete={onDelete} />);
    fireEvent.click(screen.getByRole("button", { name: /remover/i }));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
