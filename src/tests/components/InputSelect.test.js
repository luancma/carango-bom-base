import React from "react";
import { screen, render } from "@testing-library/react";
import InputSelect from "../../components/InputSelect";
import userEvent from "@testing-library/user-event";

describe("InputSelect test", () => {
  const itemsSelect = [
    {
      name: "Marca01",
    },
    {
      name: "Marca02",
    },
    {
      name: "Marca03",
    },
  ];

  it("should display value passed as prop", () => {
    const value = "Marca01";
    render(<InputSelect value={value} itemsSelect={itemsSelect} />);
    expect(screen.getByTestId("inputSelect-test")).toHaveValue(value);
  });

  it("should call on select function", () => {
    const onSelectFn = jest.fn();
    render(
      <InputSelect
        onSelect={onSelectFn}
        itemsSelect={itemsSelect}
        label={"Marca"}
      />
    );
    userEvent.selectOptions(screen.getByTestId("inputSelect-test"), [
      "Marca01",
    ]);
    expect(onSelectFn).toHaveBeenCalled();
  });

  it("should display value selected", () => {
    render(
      <InputSelect
        onSelect={jest.fn()}
        itemsSelect={itemsSelect}
        label={"Marca"}
      />
    );
    userEvent.selectOptions(screen.getByTestId("inputSelect-test"), [
      "Marca02",
    ]);
    expect(screen.getByRole("option", { name: "Marca02" }).selected).toBe(true);
  });
});
