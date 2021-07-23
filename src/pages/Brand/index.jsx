import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DataGridPaginated2 from "../../components/DataGridPaginated2";
import React from "react";
import { useHistory } from "react-router";
import BrandService from "../../services/BrandService";

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


  const classes = useStyles();
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

      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={() => history.push("/brand/create")}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default BrandsList;
