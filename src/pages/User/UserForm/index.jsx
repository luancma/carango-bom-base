import React, { useEffect, useState } from "react";
import useFormErrors from "hooks/useFormErrors";
import { validations } from "./validations";
import FormActions from "components/FormActions";
import InputText from "components/InputText";

function UserForm({ user, onSubmit, onCancel }) {

  const [username, setUsername] = useState("");
  const [errors, validateFields, canSubmit] = useFormErrors(validations);

  useEffect(() => {
    if (user.username) {
      setUsername(user.username)
    }
  }, [user])

  const handleSubmit = event => {
    event.preventDefault();
    if (canSubmit()) {
      onSubmit(username);
    }
  };

  return (
    <form name="brand-form" aria-label="brand form" onSubmit={handleSubmit}>
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
      <FormActions onCancel={onCancel} isEdit={user && user.username} />
    </form>
  );
}

export default UserForm;
