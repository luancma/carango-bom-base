export const validations = {
  usuario: input => {
    const valido = input && input.length >= 3 && input.length <= 100;
    return {
      valido,
      texto: valido ? "" : "Usuário deve ter entre 3 e 100 caracteres.",
    };
  },
  senha: input => {
    const valido = input && input.length >= 6 && input.length <= 50;
    return {
      valido,
      texto: valido ? "" : "Senha deve ter entre 6 e 50 caracteres.",
    };
  },
};

export const validateConfirmPassword = (password, confirmPassword) => {
  const valido = password === confirmPassword;
  return {
    valido,
    texto: valido ? "" : "Senha e Confirmar Senha devem ser iguais.",
  };
};
