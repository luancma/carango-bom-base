export const validations = {
  modelo: input => {
    const valido = input && input.length >= 3 && input.length <= 100;
    return {
      valido,
      texto: valido ? "" : "Modelo deve ter entre 2 e 100 caracteres.",
    };
  },
  ano: input => {
    const valido = input && input >= minYear && input <= maxYear;
    return {
      valido,
      texto: valido ? "" : `Ano deve estar entre ${minYear} e ${maxYear}.`,
    };
  },
};

export const [minYear, maxYear] = [1900, 2022];
