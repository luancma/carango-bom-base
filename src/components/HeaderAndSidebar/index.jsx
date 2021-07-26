import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Button,
} from "@material-ui/core";
import { ChevronLeft, Menu } from "@material-ui/icons";
import { useLocation } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { authRoutes } from "routes/auth.routes";
import { useAuth } from "context/AuthContext";


const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

function HeaderAndSidebar() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const { isAuth, logout } = useAuth();

  useEffect(() => {
    const firstPartOfPathMatcher = /^\/[^/]*/g; // e.g.: "/vehicle-edit/id" -> "/vehicle-edit"
    const [mainPath] = location.pathname.match(firstPartOfPathMatcher);
    setTitle(authRoutes.find(route => route.path === mainPath)?.title);
  }, [location.pathname]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {
            isAuth && (
              <IconButton color="inherit" onClick={toggleSidebar} aria-label="menu">
                <Menu />
              </IconButton>
            )
          }
          <Typography className="text-center" variant="h6" component="h1">
            {title}
          </Typography>
          {
            isAuth ? (
              <Button
                onClick={() => logout()}
                color="inherit">
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => history.push("/login")}
                color="inherit">
                Login
              </Button>
            )
          }
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={showSidebar}
        onClick={toggleSidebar}
      >
        <div className={classes.drawerHeader}>
          <IconButton aria-label="close menu">
            <ChevronLeft></ChevronLeft>
          </IconButton>
        </div>
        <Divider />
        <List role="navigation">
          {authRoutes
            .filter(route => route.sidebar)
            .map(route => {
              return (
                <ListItem
                  button
                  key={route.path}
                  component={Link}
                  to={route.path}
                >
                  <ListItemText>{route.title}</ListItemText>
                </ListItem>
              );
            })}
        </List>
      </Drawer>
    </>
  );
}

export default HeaderAndSidebar;
