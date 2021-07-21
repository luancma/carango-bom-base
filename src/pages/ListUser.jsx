import React, { useState } from "react";
import DataGridPaginated from "components/DataGridPaginated";
import UserUtil from "util/UserUtil";
import useUser from "../hooks/useUser";

const ITEMS_PER_PAGE = 10;

function ListUser() {
  const [defaultPage, setDefaultPage] = useState(0);
  const { users, fetchUsers, loading, usersTotal, deleteUserById } = useUser({
    size: ITEMS_PER_PAGE,
  });

  const handleDeleteItem = async (event, id) => {
    event.stopPropagation();
    await deleteUserById(id);
    setDefaultPage(0);
  };

  const columns = UserUtil.getUserColumns({ onDelete: handleDeleteItem });

  return (
    <div>
      <DataGridPaginated
        defaultPage={defaultPage}
        loading={loading}
        items={users}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={usersTotal}
        fetchItems={fetchUsers}
        columns={columns}
      />
    </div>
  );
}

export default ListUser;
