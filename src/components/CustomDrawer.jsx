import React from 'react';
import { Link } from 'react-router-dom';
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';
import FlagIcon from '@material-ui/icons/Flag';
import GroupIcon from '@material-ui/icons/Group';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: theme.drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

export default ({ open, setOpen }) => {
  
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/login" key="Entrar">
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Entrar" />
        </ListItem>
        <ListItem button component={Link} to="/logout" key="Sair">
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
        <Divider />
          <ListItem button component={Link} to="/veiculos" key="Veículos">
            <ListItemIcon><TimeToLeaveIcon /></ListItemIcon>
            <ListItemText primary="Veículos" />
          </ListItem>
        <ListItem button component={Link} to="/marcas" key="Marcas">
          <ListItemIcon><FlagIcon /></ListItemIcon>
          <ListItemText primary="Marcas" />
        </ListItem>
        <ListItem button component={Link} to="/usuarios" key="Usuários">
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Usuários" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard" key="Dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </Drawer>
  )
}