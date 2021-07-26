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
    result.push({ id: i, model: `Test${i}` });
  }
  return result;
}

describe("DataGridPaginated test component", () => {
  it("should render the grid component", async () => {
    render(
      <DataGridPaginated
        columns={columns}
        onItemClick={() => {}}
        fetchItems={() => ({ content: rows, totalElements: 1 })}
      />,
    );
    expect(await screen.findByRole("grid")).toBeInTheDocument();
  });

  it("should call onRowClick after click in the grid table row", async () => {
    const onRowClick = jest.fn();

    render(
      <DataGridPaginated
        columns={columns}
        items={rows}
        onItemClick={onRowClick}
        fetchItems={() => ({ content: rows, totalElements: 1 })}
      />,
    );

    userEvent.click(await screen.findByRole("row", { name: /Test/i }));

    expect(onRowClick).toHaveBeenCalled();
  });

  it("should display itemsPerPage with the total items", async () => {
    const items = generateNthItems(10);
    render(
      <DataGridPaginated
        columns={columns}
        itemsPerPage={10}
        onItemClick={() => {}}
        fetchItems={() => ({ content: items, totalElements: 20 })}
      />,
    );

    expect(await screen.findByText(/1-10.*20/)).toBeInTheDocument();
  });
});
