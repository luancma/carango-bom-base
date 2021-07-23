import { useEffect, useState } from "react";
import BrandService from "services/BrandService";

export function useGetBrands() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {

    const fetchBrands = async () => {
      const resp = await BrandService.findAll()
      if (resp) {
        return setBrands(resp.content);
      }
      return setBrands();
    };

    fetchBrands();

  }, []);
  return brands;
}