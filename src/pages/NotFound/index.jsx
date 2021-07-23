import React from "react";
import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";
import { paths } from "../components/HeaderAndSidebar/paths";

const useStyles = makeStyles({
  largeWrapper: {
    padding: "2rem",
  },
  textMessage: {
    padding: "1rem",
  },
});

export default function NotFound() {
  const styles = useStyles();
  const history = useHistory();

  const handleClickHomeButton = () => history.push(paths.home);

  return (
    <Box>
      <Typography variant="h3" align="center" className={styles.largeWrapper}>
        Ops...
      </Typography>
      <Typography variant="h4" align="center" className={styles.textPadding}>
        Página não encontrada
      </Typography>
      <Box
        align="center"
        className={styles.largeWrapper}
        onClick={handleClickHomeButton}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          size="large"
        >
          Início
        </Button>
      </Box>
    </Box>
  );
}
