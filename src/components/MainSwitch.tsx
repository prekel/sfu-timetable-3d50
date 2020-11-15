import React, { FC } from "react";
import { Switch, Route } from "react-router";

import { Home } from "./Home";
import { TimetablePage } from "./TimetablePage";
import { Autocomplete } from "./Autocomplete";

export const MainSwitch: FC<{
  onQuickTargetToggle: (target: string, check: boolean) => void;
}> = ({ onQuickTargetToggle }) => {
  return (
    <>
      <Switch>
        <Route path="/auto">
          <Autocomplete></Autocomplete>
        </Route>
        <Route path="/:target">
          <TimetablePage onQuickTargetToggle={onQuickTargetToggle} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
