import { makeStyles } from "@material-ui/core";
import DataGridPaginated2 from "../../components/DataGridPaginated2";
import React from "react";
import { useHistory } from "react-router";
import UserService from "../../services/UserService";
import AddButton from "components/AddButton";

const gridColumns = [{ field: "username", headerName: "Username" }];

function UserList() {
  const history = useHistory();

  function alterar(id) {
    history.push("/user/" + id);
  }

  async function excluir(id) {
    await UserService.remove(id);
  }

  const brandServiceListar = async (page, size, paged) => await UserService.findAll(page, size, paged);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGridPaginated2
        fetchItems={brandServiceListar}
        columns={gridColumns}
        onItemClick={alterar}
        onDelete={excluir}
      />

      <AddButton onClick={() => history.push('/user/create')} />
    </div>
  );
}

export default UserList;
