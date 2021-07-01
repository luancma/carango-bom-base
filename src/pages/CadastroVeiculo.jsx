import {
  Button,
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useErros from "../hooks/useErros";
import Veiculo from "../models/Veiculo";
import MarcaService from "../services/MarcaService";
import VeiculoService from "../services/VeiculoService";

const useStyles = makeStyles(() => ({
  actions: {
    marginLeft: "10px",
  },
}));

function CadastroVeiculo() {
  const [veiculo, setVeiculo] = useState(Veiculo.vazio());
  const [marcas, setMarcas] = useState([]);
  const [noEstadoInicial, setNoEstadoInicial] = useState(true);

  const history = useHistory();

  const { id } = useParams();

  const classes = useStyles();

  const valorNaoEhVazio = (valor) => {
    return !!valor
      ? { valido: true, texto: "" }
      : { valido: false, texto: "O campo não deve estar vazio." };
  };

  const valorNaoEhVazioEMaiorQueZero = (valor) => {
    if (!!valor && valor > 0) {
      return { valido: true, texto: "" };
    } else {
      return {
        valido: false,
        texto: "O campo deve estar preenchido com um valor maior que 0.",
      };
    }
  };

  const validacoes = {
    marcaId: valorNaoEhVazio,
    modelo: valorNaoEhVazio,
    ano: valorNaoEhVazioEMaiorQueZero,
    valor: valorNaoEhVazioEMaiorQueZero,
  };

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  function validar(event) {
    setNoEstadoInicial(false);
    validarCampos(event);
  }

  function cancelar() {
    history.goBack();
  }

  useEffect(() => {
    if (id) {
      VeiculoService.consultar(id).then((v) => setVeiculo(v));
      setNoEstadoInicial(false);
    }

    MarcaService.listar().then((listaMarcas) => setMarcas(listaMarcas));
  }, [id]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
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
      <FormControl variant='outlined' fullWidth error={!erros.marcaId.valido}>
        <InputLabel id='demo-simple-select-outlined-label'>Marca</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={veiculo.marcaId}
          onChange={(evt) =>
            setVeiculo({ ...veiculo, marcaId: evt.target.value })
          }
          label='Marca'
          name='marcaId'
          fullWidth
          onBlur={validar}
        >
          {marcas.map((marca) => (
            <MenuItem key={marca.id} value={marca.id}>
              {marca.nome}
            </MenuItem>
          ))}
        </Select>
        {!erros.marcaId.valido && (
          <FormHelperText>{erros.marcaId.texto}</FormHelperText>
        )}
      </FormControl>

      <TextField
        value={veiculo.ano}
        onChange={(evt) => setVeiculo({ ...veiculo, ano: evt.target.value })}
        onBlur={validar}
        helperText={erros.ano.texto}
        error={!erros.ano.valido}
        name='ano'
        id='ano'
        label='Ano'
        type='Number'
        min='0'
        variant='outlined'
        fullWidth
        required
        margin='normal'
      />
      <TextField
        value={veiculo.modelo}
        onChange={(evt) => setVeiculo({ ...veiculo, modelo: evt.target.value })}
        onBlur={validar}
        helperText={erros.modelo.texto}
        error={!erros.modelo.valido}
        name='modelo'
        id='modelo'
        label='Modelo'
        type='text'
        variant='outlined'
        fullWidth
        required
        margin='normal'
      />
      <TextField
        value={veiculo.valor}
        onChange={(evt) => setVeiculo({ ...veiculo, valor: evt.target.value })}
        onBlur={validar}
        helperText={erros.valor.texto}
        error={!erros.valor.valido}
        name='valor'
        id='valor'
        label='Valor'
        type='Number'
        variant='outlined'
        fullWidth
        required
        margin='normal'
      />

      <Button
        variant='contained'
        color='primary'
        type='submit'
        disabled={noEstadoInicial || !possoEnviar()}
      >
        {id ? "Alterar" : "Cadastrar"}
      </Button>

      <Button
        className={classes.actions}
        variant='contained'
        color='secondary'
        onClick={cancelar}
      >
        Cancelar
      </Button>
    </form>
  );
}

export default CadastroVeiculo;
