import DataGridPaginated2 from "../../components/DataGridPaginated";
import React from "react";
import { useHistory } from "react-router";
import BrandService from "../../services/BrandService";
import AddButton from "components/AddButton";

const gridColumns = [{ field: "name", flex: 1, headerName: "Marca" }];

function BrandsList() {
  const history = useHistory();

  function update(id) {
    history.push("/brand/" + id);
  }

  async function remove(id) {
    await BrandService.remove(id);
  }

  const brandServiceList = async (page, size) => await BrandService.findAllPaged(page, size);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGridPaginated2
        fetchItems={brandServiceList}
        columns={gridColumns}
        onItemClick={update}
        onDelete={remove}
      />
      <AddButton onClick={() => history.push('/brand/create')} />
    </div>
  );
}

export default BrandsList;
