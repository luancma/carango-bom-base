import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { ptBR } from "@material-ui/core/locale";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import CadastroMarca from "./pages/CadastroMarca";
import ListagemMarcas from "./pages/ListagemMarcas";
import Navbar from "./components/Navbar";
import ListagemVeiculos from "./pages/ListagemVeiculos";
import CadastroVeiculo from "./pages/CadastroVeiculo";
import ListagemUsuarios from "./pages/ListagemUsuarios";
import CadastroUsuario from "./pages/CadastroUsuario";

const muiTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: blue[900],
      },
    },
    drawerWidth: 240,
  },
  ptBR
);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(10),
  },
}));

React.useEffect(() => {
  alert("alert");
}, []);

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
          <Container component="article" maxWidth="md">
            <Switch>
              <Route path="/cadastro-marca">
                <CadastroMarca></CadastroMarca>
              </Route>
              <Route path="/alteracao-marca/:id">
                <CadastroMarca></CadastroMarca>
              </Route>
              <Route path="/veiculos">
                <ListagemVeiculos></ListagemVeiculos>
              </Route>
              <Route path="/cadastro-veiculo">
                <CadastroVeiculo></CadastroVeiculo>
              </Route>
              <Route path="/alteracao-veiculo/:id">
                <CadastroVeiculo></CadastroVeiculo>
              </Route>
              <Route path="/usuarios">
                <ListagemUsuarios></ListagemUsuarios>
              </Route>
              <Route path="/cadastro-usuario">
                <CadastroUsuario></CadastroUsuario>
              </Route>
              <Route path="/">
                <ListagemMarcas></ListagemMarcas>
              </Route>
            </Switch>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
