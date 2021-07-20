export const formatBrands = brands => {
  return brands.map(brand => {
    return { name: brand.nome, value: brand.id };
  });
};
