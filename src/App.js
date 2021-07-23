import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { ptBR } from "@material-ui/core/locale";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import HeaderAndSidebar from "components/HeaderAndSidebar";
import { AuthProvider } from "context/AuthContext"
import { SnackBarProvider } from "context/SnackBarProvider"
import Routes from "routes";
import SnackBar from "./components/SnackBar"
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
      <SnackBarProvider>
        <SnackBar />
      <AuthProvider>
        <div className={classes.root}>
          <CssBaseline />
          <HeaderAndSidebar />
          <main data-testid="main" className={classes.content}>
            <div className={classes.toolbar} />
            <Container component="article" maxWidth="md">
              <Routes />
            </Container>
          </main>
        </div>
      </AuthProvider>
      </SnackBarProvider>
    </ThemeProvider>
  );
}

export default App;
