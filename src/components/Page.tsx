import React, { FC } from "react";
import { HashRouter, BrowserRouter, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Basename } from "../App";
import { MainSwitch } from "./MainSwitch";
import { Navigation } from "./Navigation";
export const Page: FC<{
  quickTargets: string[];
  onQuickTargetChange: (target: string, check: boolean) => void;
}> = ({ quickTargets, onQuickTargetChange }) => {
  return (
    <BrowserRouter basename={Basename}>
      <>
        {/* <Redirect push to={"/"} /> */}
        <HashRouter>
          <>
            <Container fluid>
              <Container>
                <Navigation quickTargets={quickTargets} />
              </Container>
              <MainSwitch onQuickTargetChange={onQuickTargetChange} />
            </Container>
          </>
        </HashRouter>
      </>
    </BrowserRouter>
  );
};
