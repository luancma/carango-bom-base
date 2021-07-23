export const validations = {
  usuario: input => {
    const isValid = input && input.length >= 3 && input.length <= 100;
    return {
      isValid,
      text: isValid ? "" : "Usuário deve ter entre 3 e 100 caracteres.",
    };
  },
  senha: input => {
    const isValid = input && input.length >= 6 && input.length <= 50;
    return {
      isValid,
      text: isValid ? "" : "Senha deve ter entre 6 e 50 caracteres.",
    };
  },
};

export const validateConfirmPassword = (password, confirmPassword) => {
  const isValid = password === confirmPassword;
  return {
    isValid,
    text: isValid ? "" : "Senha e Confirmar Senha devem ser iguais.",
  };
};
