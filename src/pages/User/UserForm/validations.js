export const validations = {
  username: input => {
    const isValid = input && input.length >= 3 && input.length <= 100;
    return {
      isValid,
      text: isValid ? "" : "Nome de usuário deve ter entre 3 e 100 caracteres.",
    };
  },
};
