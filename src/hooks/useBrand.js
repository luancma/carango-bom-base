import React, { useState, useCallback } from "react";
import BrandService from "services/BrandService";

const useBrand = ({ size = 10, paged }) => {
  const [totalBrands, setTotalBrands] = useState(0);
  const [allBrands, setAllBrands] = useState([]);
  const [brand, setBrand] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOneBrand = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const resp = await BrandService.findById(id);
        setBrand(resp);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }, []);

  const fetchAllBrands = useCallback(
    async page => {
      console.log('test')
      setLoading(true);
      try {
        const { content = [], total = 0 } = await BrandService.findAll(
          page,
          size,
          paged
        );
        setAllBrands(content);
        setTotalBrands(total);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [size, paged],
  );

  const removeBrand = async id => {
    setLoading(true);
    try {
      await BrandService.remove(id);
      await fetchAllBrands(0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    brand,
    allBrands,
    fetchAllBrands,
    loading,
    totalBrands,
    removeBrand,
    fetchOneBrand,
  };
};

export default useBrand;
