export const validations = {
  name: input => {
    const isValid = input && input.length >= 3 && input.length <= 100;
    return {
      isValid,
      text: isValid ? "" : "Nome da marca deve ter entre 3 e 100 caracteres.",
    };
  },
};
