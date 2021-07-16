import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ConfirmDialog from "../../components/ConfirmDialog";

describe("ConfirmDialog tests", () => {
  it("should render dialog", () => {
    render(<ConfirmDialog open={true} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should show dialog title", () => {
    render(<ConfirmDialog open={true} title="Dialog test" />);
    expect(screen.getByText(/dialog test/i)).toBeInTheDocument();
  });

  it("should call onClose after clicking close button", () => {
    const onCloseFn = jest.fn();
    render(<ConfirmDialog open={true} onClose={onCloseFn} />);
    fireEvent.click(screen.getByRole("button", { name: /fechar/i }));
    expect(onCloseFn).toHaveBeenCalledTimes(1);
  });

  it("should call onConfirm after clicking confirm button", () => {
    const onConfirmFn = jest.fn();
    render(<ConfirmDialog open={true} onConfirm={onConfirmFn} />);
    fireEvent.click(screen.getByRole("button", { name: /confirmar/i }));
    expect(onConfirmFn).toHaveBeenCalledTimes(1);
  });
});
