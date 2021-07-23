import React from 'react';
import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddButton = ({ onClick }) => {
  const useStyles = makeStyles(() => ({
    fab: {
      position: "absolute",
      bottom: "100px",
      right: "100px",
    },
    actionsToolbar: {
      float: "right",
    },
    actions: {
      top: "10px",
      marginLeft: "10px",
    },
  }));

  const classes = useStyles();


  return (
    <Fab
      color="primary"
      aria-label="add"
      className={classes.fab}
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  )
}

export default AddButton;