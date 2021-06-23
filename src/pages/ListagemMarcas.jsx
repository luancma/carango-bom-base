import { Box, Button, Fab, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MarcaService from '../services/MarcaService';

const colunas = [
    { field: 'nome', headerName: 'Marca', width: 200 }
];

const useStyles = makeStyles(() => ({
    actions: {
        marginLeft: '10px',
    }
}));

function ListagemMarcas() {
    const [marcas, setMarcas] = useState([]);
    const [marcaSelecionada, setMarcaSelecionada] = useState();
    const classes = useStyles();
    const history = useHistory();

    function alterar() {
        history.push('/alteracao-marca/' + marcaSelecionada.id);
    }

    function excluir() {
        MarcaService.excluir(marcaSelecionada)
            .then(() => {
                setMarcaSelecionada(null);
                carregarMarcas();
            });
    }

    useEffect(() => carregarMarcas(), []);

    function carregarMarcas() {
        MarcaService.listar()
            .then(dados => setMarcas(dados));
    }

    return (
        <div style={{ width: '100%' }}>
            <DataGrid rows={marcas} 
                columns={colunas} 
                autoHeight={true}
                pageSize={10}
                onRowSelected={gridSelection => setMarcaSelecionada(gridSelection.data)}
            />
            <Box width={1} marginTop="10px" display="flex" justifyContent="space-between">
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => history.push('/cadastro-marca')}>
                        Adicionar
                            </Button>
                </div>
                <div className={classes.actionsToolbar}>
                    <Button
                        className={classes.actions}
                        variant="contained"
                        color="secondary"
                        disabled={!marcaSelecionada}
                        onClick={() => excluir()}>
                        Excluir
                            </Button>
                    <Button
                        className={classes.actions}
                        variant="contained"
                        color="primary"
                        disabled={!marcaSelecionada}
                        onClick={() => alterar()}>
                        Alterar
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default ListagemMarcas;