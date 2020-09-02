import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { PrivateRoute } from "./routers";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}
export default App;
