import React, { FC } from "react";
import { Switch, Route } from "react-router";

import { Home } from "./Home";
import { TimetablePage } from "./TimetablePage";
import { Autocomplete } from "./Autocomplete";

export const MainSwitch: FC<{
  onQuickTargetChange: (target: string, check: boolean) => void;
}> = ({ onQuickTargetChange }) => {
  return (
    <>
      <Switch>
        <Route path="/auto">
          <Autocomplete />
        </Route>
        <Route path="/:target">
          <TimetablePage onQuickTargetChange={onQuickTargetChange} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
