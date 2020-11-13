import React, { FC } from "react";
import { HashRouter, BrowserRouter, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Basename } from "../App";
import { MainSwitch } from "./MainSwitch";
import { Navigation } from "./Navigation";

export const Page: FC = () => {
  return (
    <BrowserRouter basename={Basename}>
      <>
        {/* <Redirect push to={"/"} /> */}
        <HashRouter>
          <>
            <Container>
              <Navigation />
              <MainSwitch />
            </Container>
          </>
        </HashRouter>
      </>
    </BrowserRouter>
  );
};
