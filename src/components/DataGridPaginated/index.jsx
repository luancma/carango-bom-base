import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

const DataGridPaginated = ({
  onItemClick,
  itemsPerPage = 10,
  fetchItems,
  totalItems = 0,
  loading,
  items,
  columns,
  defaultPage = 0,
}) => {
  const [page, setPage] = useState(defaultPage);

  const handleRowClick = (param) => {
    const {
      row: { id = null },
    } = param;

    if (onItemClick) {
      onItemClick(id);
    }
  };

  const onPageChangeHandler = ({ page }) => {
    setPage(page);
  };

  useEffect(() => {
    setPage(defaultPage);
  }, [defaultPage]);

  useEffect(() => {
    fetchItems(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <DataGrid
      loading={loading}
      pagination
      paginationMode="server"
      page={page}
      pageSize={itemsPerPage}
      rowCount={totalItems}
      onPageChange={onPageChangeHandler}
      onRowClick={handleRowClick}
      rows={items}
      columns={columns}
    />
  );
};

export default DataGridPaginated;
