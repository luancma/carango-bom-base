import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useErros from "../hooks/useErros";
import UsuarioService from "../services/UsuarioService";

const useStyles = makeStyles(() => ({
  actions: {
    marginLeft: "10px",
  },
}));

function CadastroUsuario() {
  const [usuario, setUsuario] = useState("");
  const [noEstadoInicial, setNoEstadoInicial] = useState(true);
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

  const history = useHistory();

  const { id } = useParams();

  const classes = useStyles();

  const validacoes = {
    nome: (dado) => {
      if (dado) {
        return { valido: true };
      } else {
        return {
          valido: false,
          texto: "O campo nome não deve estar vazio.",
        };
      }
    },
    senha: (dado) => {
      if(dado && dado.length > 6){
        return {valido: true };
      }else{
        return {valido:false, texto: "O campo senha não deve estar vazio e deve conter mais de 3 caracteres."}
      }
    },
    confirmacaoSenha: (dado) => {
      if(dado && dado === usuario.senha){
        return {valido: true };
      }else{
        return {valido:false, texto: "O campo confirmação de senha não deve estar vazio e deve ser igual ao campo senha."}
      }
    }
  };

  function validar(event) {
    setNoEstadoInicial(false);
    validarCampos(event);
  }

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  function cancelar() {
    history.goBack();
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          UsuarioService.cadastrar(usuario).then((res) => {
            setUsuario("");
            history.goBack();
          });
        }
      }}
    >
      <TextField
        value={usuario.nome}
        onChange={(evt) => setUsuario({ ...usuario, nome: evt.target.value })}
        onBlur={validar}
        helperText={erros.nome.texto}
        error={!erros.nome.valido}
        name="nome"
        id="nome"
        label="Nome"
        type="text"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />

      <TextField
        value={usuario.senha}
        onChange={(evt) => setUsuario({ ...usuario, senha: evt.target.value })}
        onBlur={validar}
        helperText={erros.senha.texto}
        error={!erros.senha.valido}
        name="senha"
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />

      <TextField
        value={confirmacaoSenha}
        onChange={(evt) => setConfirmacaoSenha(evt.target.value)}
        onBlur={validar}
        helperText={erros.confirmacaoSenha.texto}
        error={!erros.confirmacaoSenha.valido}
        name="confirmacaoSenha"
        id="confirmacaoSenha"
        label="Confirmação da senha"
        type="password"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={!possoEnviar() || noEstadoInicial}
      >
        Cadastrar
      </Button>

      <Button
        className={classes.actions}
        variant="contained"
        color="secondary"
        onClick={cancelar}
      >
        Cancelar
      </Button>
    </form>
  );
}

export default CadastroUsuario;
