import React, { useState } from "react";
import DataGridPaginated from "components/DataGridPaginated";
import UserUtil from "util/UserUtil";
import useUser from "../hooks/useUser";
import ConfirmDialog from "../components/ConfirmDialog";

const ITEMS_PER_PAGE = 10;

function ListUser() {
  const [defaultPage, setDefaultPage] = useState(0);
  const { users, fetchUsers, loading, usersTotal, deleteUserById } = useUser({
    size: ITEMS_PER_PAGE,
  });

  const [idToDelete, setIdToDelete] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const confirmProps = {
    title: "Excluir",
    message: "Tem certeza que deseja excluir?",
  };

  const handleDeleteItem = async () => {
    await deleteUserById(idToDelete);
    setDefaultPage(0);
    setShowConfirm(false);
  };

  const handleOpenDialog = (evt, id) => {
    evt.stopPropagation();
    setIdToDelete(id);
    setShowConfirm(true);
  };

  const columns = UserUtil.getUserColumns({ onDelete: handleOpenDialog });

  return (
    <>
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
      <ConfirmDialog
        title={confirmProps.title}
        message={confirmProps.message}
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => handleDeleteItem()}
      />
    </>
  );
}

export default ListUser;
