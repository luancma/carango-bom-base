export const validations = {
  username: input => {
    const isValid = input && input.length >= 3 && input.length <= 100;
    return {
      isValid,
      text: isValid ? "" : "Nome de usuário deve ter entre 3 e 100 caracteres.",
    };
  },
  password: input => {
    const isValid = input && input.length >= 6 && input.length <= 50;
    return {
      isValid,
      text: isValid ? "" : "Senha deve ter entre 6 e 50 caracteres.",
    };
  },
  checkPassword: ({ password, confirmPassword }) => {
    const isValid = password === confirmPassword;
    return {
      isValid,
      text: isValid ? "" : "Senha e Confirmar Senha devem ser iguais.",
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
