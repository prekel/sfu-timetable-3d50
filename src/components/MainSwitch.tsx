import React from "react";
import { Switch, Route } from "react-router";

import { Home } from "./Home";
import { Timetable } from "./Timetable";

export const MainSwitch: React.FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route path="/:target">
          <Timetable />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
