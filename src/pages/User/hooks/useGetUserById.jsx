import { useEffect, useState } from "react";
import UserService from "services/UserService";

export function useGetUserById(id) {
  const [user, setUser] = useState({});
  useEffect(() => {

    const fetchUser = async () => {
      const resp = await UserService.findById(id)
      if (resp.id) {
        return setUser(resp);
      }
      return setUser();
    };

    !!id && fetchUser();

  }, [id]);
  return user;
}