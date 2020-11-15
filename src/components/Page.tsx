import React, { FC } from "react";
import { HashRouter, BrowserRouter, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Basename } from "../App";
import { MainSwitch } from "./MainSwitch";
import { Navigation } from "./Navigation";
export const Page: FC<{
  quickTargets: string[];
  onQuickTargetToggle: (target: string, check: boolean) => void;
}> = ({ quickTargets, onQuickTargetToggle }) => {
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
              <MainSwitch onQuickTargetToggle={onQuickTargetToggle} />
            </Container>
          </>
        </HashRouter>
      </>
    </BrowserRouter>
  );
};
