import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLoadAccounts } from "../../actions/customerAction";

import Card from "../../components/card";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.customerReducer.accounts);

  console.log("accounts", accounts);
  useEffect(() => {
    console.log("call");
    (async () => await dispatch(onLoadAccounts()))();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {accounts.map((account) => (
          <Grid item xs={4}>
            <Paper evelation={3}>
              <Card account={account} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
