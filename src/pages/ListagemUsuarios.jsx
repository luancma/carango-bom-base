import { DataGrid } from "@material-ui/data-grid";
import { Box, Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import React, { useEffect, useState } from 'react';
import UsuarioService from "../services/UsuarioService";

const useStyles = makeStyles(() => ({
    actions: {
        marginLeft: '10px',
    }
  }));
  
  function ListagemUsuarios() {
    const history = useHistory();
    const [usuarioSelecionado, setUsuarioSelecionado] = useState();
    const [usuarios, setUsuarios] = useState([]);
    const classes = useStyles();
  
    useEffect(() => carregarUsuarios(), []);
  
    function excluir() {
      UsuarioService.excluir(usuarioSelecionado).then(() => {
        setUsuarioSelecionado(null);
        carregarUsuarios();
      });
    }
  
    function carregarUsuarios() {
        setUsuarios(UsuarioService.listar());
          /*.then(dados => setUsuarios(dados));*/
      }
  
  
    const columns = [
      {
          field: "nome", headerName: "Nome", flex: 1
      }
    ];
  
    return (
      <div>
        <DataGrid rows={usuarios} columns={columns} pageSize={5} autoHeight={true}
        onRowSelected={gridSelection => setUsuarioSelecionado(gridSelection.data)}
        />
  
        <Box
          width={1}
          marginTop="10px"
          display="flex"
          justifyContent="space-between"
        >
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/cadastro-usuario")}
            >
              Adicionar
            </Button>
          </div>
          <div className={classes.actionsToolbar}>
            <Button
              className={classes.actions}
              variant="contained"
              color="secondary"
              disabled={!usuarioSelecionado}
              onClick={() => excluir()}
            >
              Excluir
            </Button>
          </div>
        </Box>
      </div>
    );
  }
  
  export default ListagemUsuarios;
  