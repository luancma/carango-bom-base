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
} from "@material-ui/core";
import { ChevronLeft, Menu } from "@material-ui/icons";
import { useLocation } from "react-router";
import { routeTitles } from "./paths";
import { Link } from "react-router-dom";

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
  const [title, setTitle] = useState(
    () => routeTitles.find(route => route.path === "/").title,
  );
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const firstPartOfPathMatcher = /^\/[^/]*/g; // e.g.: "/vehicle-edit/id" -> "/vehicle-edit"
    const [mainPath] = location.pathname.match(firstPartOfPathMatcher);
    setTitle(routeTitles.find(route => route.path === mainPath).title);
  }, [location.pathname]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleSidebar}>
            <Menu />
          </IconButton>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={showSidebar}
        onClick={toggleSidebar}
      >
        <div className={classes.drawerHeader}>
          <IconButton>
            <ChevronLeft></ChevronLeft>
          </IconButton>
        </div>
        <Divider />
        <List>
          {routeTitles
            .filter(route => route.showInSidebar)
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
