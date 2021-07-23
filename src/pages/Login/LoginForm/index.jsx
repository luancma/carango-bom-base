import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import InputText from "components/InputText";

function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("123456");

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form name="login-form" aria-label="login form" onSubmit={handleSubmit}>
      <InputText
        label="Usuário"
        name="usuario"
        id="usuario"
        value={username}
        onChange={setUsername}
        fullWidth
        required
        margin="normal"
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
        type="password"
      />
      <Box paddingTop={1}>
        <Button variant="contained" color="primary" type="submit">
          Entrar
        </Button>
      </Box>
    </form>
  );
}

export default LoginForm;
