import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home.container";
import Upload from "./containers/upload.container";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/upload" exact component={Upload} />
    </Switch>
  );
}