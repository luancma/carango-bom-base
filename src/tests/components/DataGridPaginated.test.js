import React from "react";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import DataGridPaginated from "components/DataGridPaginated";

const columns = [
  {
    field: "model",
    headerName: "Modelo",
    flex: 1,
  },
];

const rows = [{ id: 1, model: "Test" }];

function generateNthItems(itemsLength) {
  const result = [];
  for (let i = 0; i < itemsLength; i += 1) {
    result.push({ id: 1, model: `Test${i}` });
  }
  return result;
}

describe("DataGridPaginated test component", () => {
  it("should render the grid component", () => {
    render(
      <DataGridPaginated
        columns={columns}
        items={[]}
        onItemClick={() => {}}
        fetchItems={() => {}}
      />
    );
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("should call onRowClick after click in the grid table row", () => {
    const onRowClick = jest.fn();

    render(
      <DataGridPaginated
        columns={columns}
        items={rows}
        onItemClick={onRowClick}
        fetchItems={() => {}}
      />
    );

    userEvent.click(screen.getByRole("row", { name: /Test/i }));

    expect(onRowClick).toHaveBeenCalled();
  });

  it("should display itemsPerPage with the total items", async () => {
    const items = generateNthItems(20);
    render(
      <DataGridPaginated
        columns={columns}
        items={items}
        itemsPerPage={10}
        onItemClick={() => {}}
        fetchItems={() => {}}
      />
    );

    // expect(screen.getByText("1-10 of 20")).toBeInTheDocument();
  });
});
