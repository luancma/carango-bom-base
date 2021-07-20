import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import InputText from "../../components/InputText";

describe("InputText test", () => {
  const callback = jest.fn();

  it("should display value passed as prop", () => {
    const value = "test";
    render(<InputText value={value} />);
    expect(screen.getByRole("textbox")).toHaveValue(value);
  });

  it("should call on change function", () => {
    render(<InputText onChange={callback} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "changed text" } });
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should display label", () => {
    const label = "Test Label";
    render(<InputText label={label} id="test" />);
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  it("should have type text", () => {
    render(<InputText />);
    const input = screen.getByRole("textbox");
    expect(input.type).toBe("text");
  });

  it("should have attribute minLength passed as prop", () => {
    render(<InputText minLength={3} />);
    expect(screen.getByRole("textbox").minLength).toBe(3);
  });

  it("should have attribute maxLength passed as prop", () => {
    render(<InputText maxLength={20} />);
    expect(screen.getByRole("textbox").maxLength).toBe(20);
  });

  it("should call on blur function", () => {
    render(<InputText onBlur={callback} />);
    fireEvent.blur(screen.getByRole("textbox"));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should have the id passed as prop", () => {
    render(<InputText id="some-id" />);
    expect(screen.getByRole("textbox").id).toBe("some-id");
  });
});
