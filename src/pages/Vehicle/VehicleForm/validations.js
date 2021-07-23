export const validations = {
  model: input => {
    const isValid = input && input.length >= 2 && input.length <= 100;
    return {
      isValid,
      text: isValid ? "" : "Modelo deve ter entre 2 e 100 caracteres.",
    };
  },
  year: input => {
    const isValid = input && input >= minYear && input <= maxYear;
    return {
      isValid,
      text: isValid ? "" : `Ano deve estar entre ${minYear} e ${maxYear}.`,
    };
  },
};

export const [minYear, maxYear] = [1900, 2022];
