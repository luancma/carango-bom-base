import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

import { makeDataGridColumns } from "util/data-grid.helper";

const DataGridPaginated2 = ({
  onItemClick,
  itemsPerPage = 10,
  fetchItems,
  columns,
  onDelete,
}) => {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const handleRowClick = param => {
    const {
      row: { id = null },
    } = param;

    if (onItemClick) {
      onItemClick(id);
    }
  };

  const onPageChangeHandler = ({ page: innerPage }) => {
    setPage(innerPage);
  };

  useEffect(() => {
    setLoading(true)
    const getItems = async () => {
      const resp = await fetchItems(page, itemsPerPage);
      setTotal(resp.totalElements)
      setItems(resp.content);
      setLoading(false)
    }

    getItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, refresh]);

  const handleDelete = async (evt, id) => {
    evt.stopPropagation();
    await onDelete(id)
    setPage(0);
    setRefresh(!refresh)
  }
  const gridColumns = makeDataGridColumns(columns, handleDelete)

  return (
    <DataGrid
      autoHeight
      loading={loading}
      pagination
      paginationMode="server"
      page={page}
      pageSize={itemsPerPage}
      rowCount={total}
      onPageChange={onPageChangeHandler}
      onRowClick={handleRowClick}
      rows={items}
      columns={gridColumns}
      columnBuffer={gridColumns.length}
    />
  );
};

export default DataGridPaginated2;
