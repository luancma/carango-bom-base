import React from "react";
import {
  makeDataGridColumns,
  DeleteTooltipColumn,
} from "util/data-grid.helper.jsx";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const columnTest = { field: "test", headerName: "test" };
const dataColumns = [columnTest];
describe("DataGrid Helper", () => {
  describe("makeDataGridColumns tests", () => {
    it("should return the grid columns with actions column", () => {
      const expected = [columnTest];
      const expectedNumberOfColumns = 2;
      const actual = makeDataGridColumns(dataColumns);

      expect(actual.length).toBe(expectedNumberOfColumns);
      expect(actual).toStrictEqual(expect.arrayContaining(expected));
    });

    it("should return the actions column even if passing empty data column as parameter", () => {
      const expectedNumberOfColumns = 1;
      const expectedColumnIdentification = "id";
      const actual = makeDataGridColumns([]);

      expect(actual.length).toBe(expectedNumberOfColumns);
      expect(actual[0].field).toBe(expectedColumnIdentification);
    });

    it("should render remove icon", () => {
      const deleteFn = jest.fn();
      render(<DeleteTooltipColumn onDelete={deleteFn} id={1} />);
      expect(
        screen.getByRole("button", { name: /remover/i }),
      ).toBeInTheDocument();
    });

    it("should call onDelete when click remove button", () => {
      const deleteFn = jest.fn();
      render(<DeleteTooltipColumn onDelete={deleteFn} id={1} />);
      userEvent.click(screen.getByRole("button", { name: /remover/i }));
      expect(deleteFn).toHaveBeenCalled();
    });
  });
});
