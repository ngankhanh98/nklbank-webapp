import { Grid, makeStyles, Paper, Box } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";

import LoginForm from "../components/login_form";

import logo from "../assets/logo.png";
import { login } from "../assets/language.json";
import { capitalizeFirstLetter } from "../app/functions";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3)
  },
  paper: {
    margin: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={3}>
        <div className={classes.title}>
          <img src={logo} alt="Logo" height="100ch"></img>
          <Typography>
            <Box fontSize="h5.fontSize" className={classes.title}>
              {capitalizeFirstLetter(login.vi)}
            </Box>
          </Typography>
        </div>
        <Paper elevation={0} variant="outlined" className={classes.paper}>
          <LoginForm />
        </Paper>
      </Grid>
    </Grid>
  );
}
