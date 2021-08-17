import React from "react";
import { Route, Switch } from "react-router-dom";
import JustForFun from "./components/justForFun"
import TechTree from "./components/techTree"


import Current from "./components/current"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Current}></Route>
      <Route exact path="/justforfun" component={JustForFun}></Route>
      <Route exact path="/techTreeDemo" component={TechTree}></Route>
      <Route>
        <div>Sorry Captain 404 not found</div>
      </Route>
    </Switch>
  );
}
