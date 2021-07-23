import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { ptBR } from "@material-ui/core/locale";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderAndSidebar from "components/HeaderAndSidebar";

import { authRoutes } from "routes/auth.routes";

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
              {
                authRoutes.map((route, index) => (
                  <Route key={index} exact path={route.path} component={route.component} />
                ))
              }

              <Redirect to="/vehicle" />
            </Switch>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
