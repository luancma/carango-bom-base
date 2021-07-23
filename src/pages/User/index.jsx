import DataGridPaginated2 from "../../components/DataGridPaginated2";
import React from "react";
import { useHistory } from "react-router";
import UserService from "../../services/UserService";
import AddButton from "components/AddButton";

const gridColumns = [{ field: "username", flex: 1, headerName: "Username" }];

function UserList() {
  const history = useHistory();

  async function remove(id) {
    await UserService.remove(id);
  }

  const userServiceList = async (page, size) => await UserService.findAllPaged(page, size);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGridPaginated2
        fetchItems={userServiceList}
        columns={gridColumns}
        onDelete={remove}
      />

      <AddButton onClick={() => history.push('/user/create')} />
    </div>
  );
}

export default UserList;
