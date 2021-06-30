import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useErros from "../hooks/useErros";
import Veiculo from "../models/Veiculo";
import VeiculoService from "../services/VeiculoService";

const useStyles = makeStyles(() => ({
  actions: {
    marginLeft: "10px",
  },
}));

function CadastroVeiculo() {
  const [veiculo, setVeiculo] = useState(Veiculo.vazio());

  const history = useHistory();

  const { id } = useParams();

  const classes = useStyles();
  // ToDo: Implementar validações
  //   const validacoes = {
  //     veiculo: (dado) => {
  //       if (dado && dado.length >= 3) {
  //         return { valido: true };
  //       } else {
  //         return { valido: false, texto: "Veículo deve ter ao menos 3 letras." };
  //       }
  //     },
  //   };

  //   const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  function cancelar() {
    history.goBack();
  }

  useEffect(() => {
    if (id) {
      VeiculoService.consultar(id).then((v) => setVeiculo(v));
    }
  }, [id]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (/*possoEnviar()*/ true) {
          if (id) {
            VeiculoService.alterar(veiculo).then((res) => {
              history.goBack();
            });
          } else {
            VeiculoService.cadastrar(veiculo).then((res) => {
              setVeiculo(Veiculo.vazio());
              history.goBack();
            });
          }
        }
      }}
    >
      <TextField
        // ToDo: Transformar em um select com as marcas disponíveis
        value={veiculo.marcaId}
        onChange={(evt) =>
          setVeiculo({ ...veiculo, marcaId: evt.target.value })
        }
        // onBlur={validarCampos}
        // helperText={erros.veiculo.texto}
        // error={!erros.veiculo.valido}
        name="idMarca"
        id="idMarca"
        label="Marca"
        type="Number"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />
      <TextField
        value={veiculo.ano}
        onChange={(evt) => setVeiculo({ ...veiculo, ano: evt.target.value })}
        // onBlur={validarCampos}
        // helperText={erros.veiculo.texto}
        // error={!erros.veiculo.valido}
        name="ano"
        id="ano"
        label="Ano"
        type="Number"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />
      <TextField
        value={veiculo.modelo}
        onChange={(evt) => setVeiculo({ ...veiculo, modelo: evt.target.value })}
        // onBlur={validarCampos}
        // helperText={erros.veiculo.texto}
        // error={!erros.veiculo.valido}
        name="modelo"
        id="modelo"
        label="Modelo"
        type="text"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />
      <TextField
        value={veiculo.valor}
        onChange={(evt) => setVeiculo({ ...veiculo, valor: evt.target.value })}
        // onBlur={validarCampos}
        // helperText={erros.veiculo.texto}
        // error={!erros.veiculo.valido}
        name="valor"
        id="valor"
        label="Valor"
        type="Number"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        // disabled={!possoEnviar()}
      >
        {id ? "Alterar" : "Cadastrar"}
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

export default CadastroVeiculo;
