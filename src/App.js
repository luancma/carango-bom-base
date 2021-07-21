import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { ptBR } from "@material-ui/core/locale";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CadastroMarca from "./pages/CadastroMarca";
import ListagemMarcas from "./pages/ListagemMarcas";
import RegisterVehicle from "./pages/RegisterVehicle";
import ListVehicle from "pages/ListVehicle";
import HeaderAndSidebar from "components/HeaderAndSidebar";
import { paths } from "components/HeaderAndSidebar/paths";
import RegisterUser from "pages/RegisterUser";
import ListUser from "pages/ListUser";

const muiTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: blue[900],
      },
    },
  },
  ptBR,
);

const useStyles = makeStyles(theme => ({
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
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <HeaderAndSidebar />
        <main data-testid="main" className={classes.content}>
          <div className={classes.toolbar} />
          <Container component="article" maxWidth="md">
            <Switch>
              <Route path={paths.brandCreate}>
                <CadastroMarca></CadastroMarca>
              </Route>
              <Route path={`${paths.brandEdit}/:id`}>
                <CadastroMarca></CadastroMarca>
              </Route>
              <Route path={paths.vehicleCreate}>
                <RegisterVehicle />
              </Route>
              <Route path={`${paths.vehicleEdit}/:id`}>
                <RegisterVehicle />
              </Route>
              <Route path={paths.vehicleList}>
                <ListVehicle />
              </Route>
              <Route path={paths.userCreate}>
                <RegisterUser />
              </Route>
              <Route path={paths.userList}>
                <ListUser />
              </Route>
              <Route path={paths.home}>
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
