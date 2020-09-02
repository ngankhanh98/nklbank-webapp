import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onResetErrorSuccess } from "../actions/customerAction";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackNotification() {
  const classes = useStyles();
  const [values, setValues] = useState({
    open: false,
    type: null,
    message: null,
  });
  const { success, error } = useSelector((state) => state.customerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setValues({ open: success !== null, type: "success", message: success });
  }, [success]);

  useEffect(() => {
    setValues({ open: error !== null, type: "error", message: error });
  }, [error]);

  const handleClose = (event, reason) => {
    // if (reason === "clickaway" || reason === "timeout") {
      dispatch(onResetErrorSuccess());
      setValues({ open: false, type: "", message: "" });
    // }
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={values.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={values.type}>
          {values.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
