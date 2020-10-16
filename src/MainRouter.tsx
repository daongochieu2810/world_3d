import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./components/pages/home/HomePage";
import MainScene from "./components/MainScene";

export default function MainRouter() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/scene" />
      </Route>
      <Route path="/scene" component={MainScene} exact />
    </Switch>
  );
}
