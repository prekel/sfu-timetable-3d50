import React from "react";
import { HashRouter, BrowserRouter, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

import { basename } from "../App";
import { MainSwitch } from "./MainSwitch";
import { TargetForm } from "./TargetForm";

export const Page: React.FunctionComponent = () => {
  return (
    <BrowserRouter basename={basename}>
      <>
        <Redirect to={"/"} />
        <HashRouter>
          <>
            <Container>
              <TargetForm />
              <MainSwitch />
            </Container>
          </>
        </HashRouter>
      </>
    </BrowserRouter>
  );
};
