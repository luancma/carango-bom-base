import React, { useEffect, useState } from "react";
import useFormErrors from "hooks/useFormErrors";
import { validations, checkConfirmPassword } from "./validations";
import FormActions from "components/FormActions";
import InputText from "components/InputText";

function UserForm({ user, onSubmit, onCancel }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, validateFields, canSubmit] = useFormErrors(validations);

  useEffect(() => {
    if (user?.username) {
      setUsername(user.username)
    }
  }, [user])

  const handleSubmit = event => {
    event.preventDefault();
    if (canSubmit()) {
      onSubmit({ username, password });
    }
  };

  return (
    <form name="user-form" aria-label="user form" onSubmit={handleSubmit}>
      <InputText
        label="Username"
        name="username"
        id="username"
        value={username}
        onChange={setUsername}
        fullWidth
        required
        margin="normal"
        error={!errors.username.isValid}
        helperText={errors.username.text}
        onBlur={validateFields}
      />
      <InputText
        label="Senha"
        name="password"
        id="password"
        value={password}
        onChange={setPassword}
        fullWidth
        required
        margin="normal"
        error={!errors.password.isValid}
        helperText={errors.password.text}
        onBlur={validateFields}
        type="password"
      />
      <InputText
        label="Confirmar Senha"
        name="checkPassword"
        id="confirmar"
        value={confirmPassword}
        onChange={setConfirmPassword}
        fullWidth
        required
        margin="normal"
        error={!errors.checkPassword.isValid}
        helperText={errors.checkPassword.text}
        onBlur={(event) => validateFields({ target: { name: event.target.name, value: { password, confirmPassword } } })}
        type="password"
      />
      <FormActions onCancel={onCancel} isEdit={user && user.username} />
    </form>
  );
}

export default UserForm;
