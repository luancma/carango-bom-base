import { useEffect, useState } from "react";
import BrandService from "services/BrandService";
import { formatBrands } from "util/brand.helper";

export function useGetBrands() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrands = async () => {
      const resp = await BrandService.findAll();
      if (resp) {
        return setBrands(formatBrands(resp.content));
      }
      return setBrands();
    };

    fetchBrands();
  }, []);
  return brands;
}
