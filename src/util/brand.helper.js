export const formatBrands = brands => {
  return brands.map(brand => {
    return { name: brand.name, value: brand.id };
  });
};
