import React from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { MainSwitch } from "./MainSwitch";
import { Container } from "react-bootstrap";

export const Page: React.FunctionComponent = () => {
  return (
    <BrowserRouter basename="/sfu-timetable-3d50">
      <HashRouter>
        <Container>
          <MainSwitch />
        </Container>
      </HashRouter>
    </BrowserRouter>
  );
};
