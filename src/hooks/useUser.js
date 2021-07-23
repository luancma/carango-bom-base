import React from "react";
import UserService from "services/UserService";

const useUser = ({ size = 10 }) => {
  const [usersTotal, setUsersTotal] = React.useState(0);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchUsers = React.useCallback(
    async page => {
      setLoading(true);
      try {
        const { content = [], total = 0 } = await UserService.getUsers(
          page,
          size,
        );
        setUsers(content);
        setUsersTotal(total);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [size],
  );

  const deleteUserById = async id => {
    setLoading(true);
    try {
      await UserService.deleteUserById(id);
      await fetchUsers(0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    users,
    fetchUsers,
    loading,
    usersTotal,
    deleteUserById,
  };
};

export default useUser;
