import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,



  InputLabel, makeStyles,
  OutlinedInput,
  TextField
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onAuth } from "../actions/customerAction";
import { login, password, username } from "../assets/language.json";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "-webkit-fill-available;",
    },
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  const [values, setValues] = useState({
    showPassword: false,
    password: "",
    username: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log("values :>> ", values);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  return (
    <form className={classes.root}>
      <TextField
        id="username"
        label={username.vi}
        variant="outlined"
        onChange={handleChange("username")}
      />
      <FormControl variant="outlined">
        <InputLabel htmlFor="password">
          {password.vi}
        </InputLabel>
        <OutlinedInput
          id="password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => {
          dispatch(onAuth(values.username, values.password));
        }}
      >
        {login.vi}
      </Button>
    </form>
  );
}
