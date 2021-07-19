export const formatBrands = brands => {
  const formattedBrands = brands.map(brand => {
    return { name: brand.nome, value: brand.id };
  });
  return formattedBrands;
};
