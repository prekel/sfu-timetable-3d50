import React from "react";
import { Switch, Route } from "react-router";

import { Home } from "./Home";
import { TimetablePage } from "./TimetablePage";

export const MainSwitch: React.FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route path="/:target">
          <TimetablePage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
