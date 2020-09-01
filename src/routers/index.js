import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component, ...rest }) => {
  console.log("component", component);
  console.log("rest", rest);
  const { path } = rest;
  console.log("path", path);
  const { isAuth } = useSelector((state) => state.customerReducer);
  console.log("isAuth", isAuth);
  return isAuth ? (
    <Route component={component} path={path} exact />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: path },
      }}
    />
  );
};
