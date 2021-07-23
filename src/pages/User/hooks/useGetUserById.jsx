import React, { useEffect, useState } from "react";
import UserService from "services/UserService";

export function useGetUserById(id) {
  const [brand, setBrand] = useState({});
  useEffect(() => {

    const fetchBrand = async () => {
      const resp = await UserService.findById(id)
      if (resp.id) {
        return setBrand(resp);
      }
      return setBrand();
    };

    !!id && fetchBrand();

  }, [id]);
  return brand;
}