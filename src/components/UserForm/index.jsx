import React, { useState } from "react";
import InputText from "../InputText";
import useErros from "hooks/useErros";
import { validations, validateConfirmPassword } from "./validations";
import FormActions from "components/FormActions";

function UserForm({ onSubmit, onCancel }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState({ valido: true, texto: "" });

  const [errors, validateFields, canSubmit] = useErros(validations);

  const handleSubmit = event => {
    event.preventDefault();
    if (canSubmit()) {
      const user = { username, password };
      onSubmit(user);
    }
  };

  const checkConfirmPassword = ({ target: { value } }) => {
    setConfirmError(validateConfirmPassword(password, value));
  };

  return (
    <form name="user-form" aria-label="user form" onSubmit={handleSubmit}>
      <InputText
        label="Usuário"
        name="usuario"
        id="usuario"
        value={username}
        onChange={setUsername}
        fullWidth
        required
        margin="normal"
        error={!errors.usuario.valido}
        helperText={errors.usuario.texto}
        onBlur={validateFields}
      />
      <InputText
        label="Senha"
        name="senha"
        id="senha"
        value={password}
        onChange={setPassword}
        fullWidth
        required
        margin="normal"
        error={!errors.senha.valido}
        helperText={errors.senha.texto}
        onBlur={validateFields}
        type="password"
      />
      <InputText
        label="Confirmar Senha"
        name="confirmar"
        id="confirmar"
        value={confirmPassword}
        onChange={setConfirmPassword}
        fullWidth
        required
        margin="normal"
        error={!confirmError.valido}
        helperText={confirmError.texto}
        onBlur={checkConfirmPassword}
        type="password"
      />
      <FormActions onCancel={onCancel} />
    </form>
  );
}

export default UserForm;
