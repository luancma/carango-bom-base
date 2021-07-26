import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import FormActions from "components/FormActions";

describe("FormActions tests", () => {
  it("should render buttons", () => {
    render(<FormActions />);
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cancelar/i }),
    ).toBeInTheDocument();
  });

  it("should call onCancel after clicking on cancel button", () => {
    const onCancel = jest.fn();
    render(<FormActions onCancel={onCancel} />);
    fireEvent.click(screen.getByRole("button", { name: /cancelar/i }));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("should change button text if isEdit is true", () => {
    render(<FormActions isEdit={true} />);
    expect(screen.getByRole("button", { name: /salvar/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /cadastrar/i }),
    ).not.toBeInTheDocument();
  });
});
