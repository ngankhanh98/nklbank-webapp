import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";

import { PrivateRoute } from "./routers";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}
export default App;
