import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DataGridPaginated2 from "../../components/DataGridPaginated2";
import React from "react";
import { useHistory } from "react-router";
import BrandService from "../../services/BrandService";
import AddButton from "components/AddButton";

const gridColumns = [{ field: "name", headerName: "Marca" }];

const useStyles = makeStyles(() => ({
  fab: {
    position: "absolute",
    bottom: "100px",
    right: "100px",
  },
  actionsToolbar: {
    float: "right",
  },
  actions: {
    top: "10px",
    marginLeft: "10px",
  },
}));

function BrandsList() {
  const history = useHistory();

  function alterar(id) {
    history.push("/brand/" + id);
  }

  async function excluir(id) {
    await BrandService.remove(id);
  }

  const brandServiceListar = async (page, size, paged) => await BrandService.findAll(page, size, paged);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGridPaginated2
        fetchItems={brandServiceListar}
        columns={gridColumns}
        onItemClick={alterar}
        onDelete={excluir}
      />
      <AddButton onClick={() => history.push('/brand/create')} />
    </div>
  );
}

export default BrandsList;
